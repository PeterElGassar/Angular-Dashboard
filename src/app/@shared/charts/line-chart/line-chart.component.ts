import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import {  LineChartModel } from 'src/app/core/utils/interfaces/chart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() lineChartModel: LineChartModel;
  @Input() isSmooth = false;
  chartOption: EChartsOption = {};

  constructor() { }

  ngOnInit(): void {

    this.chartOption = {
      title: this.lineChartModel.title,

      xAxis: {
        type: 'category',
        data: this.lineChartModel.xAxisDate
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: this.lineChartModel.chartDate,
          type: 'line',
          smooth: this.lineChartModel.isSmooth,
          areaStyle: this.lineChartModel.areaStyle
        }
      ]
    };
  }

}
