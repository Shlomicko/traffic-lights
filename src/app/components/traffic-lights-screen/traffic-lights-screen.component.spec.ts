import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLightsScreenComponent } from './traffic-lights-screen.component';

describe('TrafficLightsScreenComponent', () => {
  let component: TrafficLightsScreenComponent;
  let fixture: ComponentFixture<TrafficLightsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrafficLightsScreenComponent]
    });
    fixture = TestBed.createComponent(TrafficLightsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
