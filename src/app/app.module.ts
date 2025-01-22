import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { TrafficLightsScreenComponent } from './components/traffic-lights-screen/traffic-lights-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    TrafficLightsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
