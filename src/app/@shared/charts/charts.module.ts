import { MainChartComponent } from './main-chart/main-chart.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const COMPONENTS = [
  MainChartComponent,
PieChartComponent
];

@NgModule({
  imports: [CommonModule,
    NgxEchartsModule.forRoot({
    echarts: () => import('echarts'),
  })],
  declarations: [...COMPONENTS, PieChartComponent],
  exports: [...COMPONENTS],
  entryComponents: [],
})
export class ChartsModule {}
