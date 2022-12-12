import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartModel } from 'src/app/core/utils/interfaces/chart';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss'],
})
export class MainChartComponent implements OnInit {
  @Input() chartModel: ChartModel;
  @Input() isSmooth = false;
  chartOption: EChartsOption = {};

  constructor() {}
  ngOnInit(): void {
    if (this.chartModel) {
      this.chartOption = {
        xAxis: {
          type: 'category',
          data: this.chartModel.xAxisDate,
        },
        yAxis: {type: 'value'},
        series: [
          {
            data: this.chartModel.chartDate,
            type: this.chartModel.chartType,
            showBackground: true,
            backgroundStyle: {
              color: this.chartModel.backgroundColor,
            },
            smooth: this.isSmooth,
          },
        ],
      };
    }
  }
}
