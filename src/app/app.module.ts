import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { TrafficLightsScreenComponent } from './components/traffic-lights-screen/traffic-lights-screen.component';
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    TrafficLightsScreenComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
