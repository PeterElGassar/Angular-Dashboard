import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartPieModel } from 'src/app/core/utils/interfaces/chart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() pieChrtModel: ChartPieModel;
  chartOption: EChartsOption = {};

  constructor() {}

  ngOnInit(): void {

    if (this.pieChrtModel.isDounte) {

      this.chartOption = {
        title: this.pieChrtModel?.title,

        tooltip: {
          trigger: 'item',
        },
        legend: {
          bottom: '0%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: this.pieChrtModel.radius,
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: this.pieChrtModel?.data,
          },
        ],
      };
    } else {
      this.chartOption = {
        title: this.pieChrtModel?.title,
        tooltip: {
          trigger: 'item',
        },
        legend: {
          bottom: '5%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: this.pieChrtModel.radius,
            data: this.pieChrtModel?.data,

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
    }
  }
}
