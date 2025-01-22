import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TrafficLight } from '../../model/traffic-light';
import { TrafficLightService } from '../../services/traffic-light.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
  providers: [TrafficLightService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrafficLightComponent implements OnChanges {
  @Input() isSynchronized = false;

  protected lightsColors: TrafficLight[] = ['red', 'yellow', 'green'];

  constructor(protected trafficLightService: TrafficLightService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isSynchronized']) {
      this.trafficLightService.startCycle(this.isSynchronized);
    }
  }
}
