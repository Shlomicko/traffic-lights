import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrafficLightsScreenComponent } from './components/traffic-lights-screen/traffic-lights-screen.component';

const routes: Routes = [
  {
    path: 'traffic-lights',
    component: TrafficLightsScreenComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'traffic-lights',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
