import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BarChartModel } from 'src/app/core/utils/interfaces/chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() barChartModel: BarChartModel;
  @Input() isSmooth = false;
  chartOption: EChartsOption = {};

  constructor() {}
  ngOnInit(): void {
    if (this.barChartModel) {
      this.chartOption = {
title: this.barChartModel.title,
        xAxis: {
          type: 'category',
          data: this.barChartModel.xAxisDate,
        },
        yAxis: {type: 'value'},
        series: [
          {
            data: this.barChartModel.chartDate,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: this.barChartModel.backgroundColor,
            },
          },
        ],
      };
    }
  }
}
