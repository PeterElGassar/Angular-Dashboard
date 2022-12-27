import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartPieModel, GaugePieModel } from 'src/app/core/utils/interfaces/chart';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  @Input() gaugeChrtModel :GaugePieModel;
  chartOption: EChartsOption = {};

  constructor() { }

  ngOnInit(): void {

    this.chartOption = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          min: this.gaugeChrtModel.min,
          max: this.gaugeChrtModel.max,
          name:this.gaugeChrtModel.name,
          type: 'gauge',
          detail: {
            formatter: '{value}'
          },
          data: this.gaugeChrtModel.data
        }
      ]
    };
    
  }

}
