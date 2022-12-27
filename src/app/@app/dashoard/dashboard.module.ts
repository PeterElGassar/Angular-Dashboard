import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ChartsModule } from 'src/app/@shared/charts/charts.module';
import { NeedleStickInjuryComponent } from './needle-stick-injury/needle-stick-injury.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainPageComponent,
    NeedleStickInjuryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    SharedModule
  ]
})
export class DashboardModule { }
