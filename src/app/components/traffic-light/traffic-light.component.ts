import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { Light, LightsData } from '../../model/lights-data';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrafficLightComponent implements OnDestroy {
  @Input() isSynchronized = false;

  private activeLights: LightsData[] = [
    { lights: ['red'], duration: 3000 },
    { lights: ['red', 'yellow'], duration: 1500 },
    { lights: ['green'], duration: 3000 },
    { lights: ['yellow'], duration: 1500 },
  ];
  protected lightsColors: Light[] = ['red', 'yellow', 'green'];
  protected currentColor: Light[] = ['red'];
  private intervalId: any;
  private delayTimeout: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    clearInterval(this.intervalId);
    clearTimeout(this.delayTimeout);
    this.currentColor = ['red'];
    if (this.isSynchronized) {
      this.startSynchronizedCycle();
    } else {
      this.startCycle();
    }
  }

  private startCycle() {
    clearInterval(this.intervalId);
    clearTimeout(this.delayTimeout);
    const delay = Math.random() * 5000;
    this.delayTimeout = setTimeout(() => {
      this.runCycle();
    }, delay);
  }

  private startSynchronizedCycle() {
    this.runCycle();
  }

  private runCycle(): void {
    this.updateLight();
    const duration = this.getCurrentColorDuration(this.currentColor);
    this.intervalId = setTimeout(() => this.runCycle(), duration);
  }

  private updateLight() {
    const index = this.activeLights.findIndex(
      (value) => value.lights === this.currentColor,
    );
    this.currentColor =
      this.activeLights[(index + 1) % this.activeLights.length].lights;
    this.cdr.markForCheck();
  }

  private getCurrentColorDuration(key: string[]): number {
    const curLight = this.activeLights.find((value) => value.lights === key);
    return curLight?.duration || 0;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    clearTimeout(this.delayTimeout);
  }
}
