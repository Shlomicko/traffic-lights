import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { TrafficLight } from '../model/traffic-light';

@Injectable()
export class TrafficLightService {
  private readonly colors: TrafficLight[][] = [
    ['red'],
    ['red', 'yellow'],
    ['green'],
    ['yellow'],
  ];
  private readonly durations = [3000, 1500, 3000, 1500];
  private colorIndex = 0;

  private state$ = new BehaviorSubject<TrafficLight[]>(['red']);
  private stop$ = new Subject<void>();

  get currentState$(): Observable<TrafficLight[]> {
    return this.state$.asObservable();
  }

  startCycle(isSynchronized: boolean): void {
    const randomDelay = isSynchronized ? 0 : Math.ceil(Math.random() * 5000);

    this.stopAndResetCycle();

    const delayInterval = this.durations[this.colorIndex];

    timer(isSynchronized ? delayInterval : randomDelay, delayInterval)
      .pipe(
        takeUntil(this.stop$),
        switchMap(() => {
          this.colorIndex = (this.colorIndex + 1) % this.colors.length;
          this.state$.next(this.colors[this.colorIndex]);
          return timer(this.durations[this.colorIndex]).pipe(
            takeUntil(this.stop$),
          );
        }),
      )
      .subscribe();
  }

  private stopAndResetCycle(): void {
    this.colorIndex = 0;
    this.state$.next(['red']);
    this.stop$.next();
  }
}
