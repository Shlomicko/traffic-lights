import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-lights-screen',
  templateUrl: './traffic-lights-screen.component.html',
  styleUrls: ['./traffic-lights-screen.component.scss'],
})
export class TrafficLightsScreenComponent {

  protected isSynchronized = false;

  protected toggleSynchronization() {
    this.isSynchronized = !this.isSynchronized;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
