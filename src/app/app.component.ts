import { Component } from '@angular/core';
import { ChartModel } from './core/utils/interfaces/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  chartMonthly: ChartModel;
  chartBars: ChartModel;


  constructor() {
    this.chartMonthly = new ChartModel();
    this.chartMonthly.chartDate = [150, 230, 224, 218, 135, 147, 260];
    this.chartMonthly.xAxisDate = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    this.chartMonthly.chartType = 'line';
    this.chartMonthly.backgroundColor = 'rgba(28 63 95,0)';    
    
    
    this.chartBars = new ChartModel();
    this.chartBars.chartDate = [120, 200, 150, 80, 70, 110, 130];
    this.chartBars.xAxisDate = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    this.chartBars.chartType = 'bar';
    this.chartBars.backgroundColor = 'rgba(180, 180, 180, 0.2)';    
    
    
  }

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  option2 = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };
}
