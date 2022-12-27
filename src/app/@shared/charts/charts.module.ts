import { BarChartComponent } from './main-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GaugeComponent } from './gauge/gauge.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const COMPONENTS = [BarChartComponent, PieChartComponent, GaugeComponent,LineChartComponent];

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  entryComponents: [],
})
export class ChartsModule {}
