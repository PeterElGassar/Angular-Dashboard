import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import {
  BarChartModel,
  ChartPieModel,
  GaugePieModel,
  LineChartModel,
} from 'src/app/core/utils/interfaces/chart';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  title = 'dashboard';
  chartMonthly: BarChartModel;
  // pies
  pieChart: ChartPieModel;
  dounteChart: ChartPieModel;
  dounteChart2: ChartPieModel;
  // Gauges
  gaugeChart: GaugePieModel;
  gaugeChart2: GaugePieModel;
  gaugeChart3: GaugePieModel;
  // Bars
  chartBars: BarChartModel;
  chartBars2: BarChartModel;
  chartBars3: BarChartModel;
  chartBars4: BarChartModel;
// lines
lineChart: LineChartModel;
lineChart1: LineChartModel;
lineChart2: LineChartModel;
lineChart3: LineChartModel;
lineChart4: LineChartModel;
lineChart5: LineChartModel;

  constructor() {
    this.chartMonthly = new BarChartModel();

    // Pies*******
    this.pieChart = new ChartPieModel();
    this.pieChart.data = [
      { value: 1048, name: 'Present at Hospital Admission' },
      { value: 735, name: 'ICU Acquired' },
      { value: 580, name: 'Ward Acquired' },
      { value: 484, name: 'Surgical Site Infection' },
    ];
    this.pieChart.title = {
      text: 'HAI ICU Infection Location ',
      left: 'center',
    };

    this.pieChart.radius = '50%';
    this.pieChart.isDounte = false;

    //*******Dounte HAI ICU Infections*******
    this.dounteChart = new ChartPieModel();

    this.dounteChart.data = [
      { value: 63, name: 'Blood Stream Infection' },
      { value: 75, name: 'Pneumonia' },
      { value: 80, name: 'Urinary Tract Infection ' },
    ];

    this.dounteChart.title = {
      text: 'HAI ICU Infections',
      left: 'center',
    };
    this.dounteChart.radius = ['40%', '70%'];
    this.dounteChart.isDounte = true;
    // ************

    //*******Dounte HAI SSI Infections *******
    this.dounteChart2 = new ChartPieModel();

    this.dounteChart2.data = [
      { value: 13, name: 'Superficial SSI' },
      { value: 34, name: 'Deep SSI' },
      { value: 76, name: 'Organ/Space SSI' },
    ];
    this.dounteChart2.title = {
      text: 'HAI SSI Infections',
      left: 'center',
    };
    this.dounteChart2.radius = ['40%', '70%'];
    this.dounteChart2.isDounte = true;
    // ************



    // Lines**********
        //to remove marker effect assign 'null', or empty obj for show marker '{}'
    //0
    this.lineChart = new LineChartModel();
    this.lineChart.chartDate = [14, 35, 32, 24,50];
    this.lineChart.xAxisDate = [
      'April 2022', 'March 2021', 'June 2022 ', 'May 2022'   
    ];
    this.lineChart.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.lineChart.title = {
      text: 'BSI',
      left: 'center',
    };
    this.lineChart.areaStyle = null
    //1
    this.lineChart1 = new LineChartModel();
    this.lineChart1.chartDate = [24, 35, 42, 24,50];
    this.lineChart1.xAxisDate = [
      'April 2022', 'March 2021', 'June 2022 ', 'May 2022'   
    ];
    this.lineChart1.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.lineChart1.title = {text: 'PNU',left: 'center'};
    this.lineChart1.areaStyle = null

    //2
    this.lineChart2 = new LineChartModel();
    this.lineChart2.chartDate = [35, 42, 25, 13,50];
    this.lineChart2.xAxisDate = [
      'April 2022', 'March 2021', 'June 2022 ', 'May 2022'   
    ];
    this.lineChart2.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.lineChart2.title = {
      text: 'UTI',
      left: 'center',
    };
    this.lineChart2.areaStyle = null

    //3
    this.lineChart3 = new LineChartModel();
    this.lineChart3.chartDate = [34, 42, 50, 12,13];
    this.lineChart3.xAxisDate = [
      'April 2022', 'March 2021', 'June 2022 ', 'May 2022'   
    ];
    this.lineChart3.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.lineChart3.title = {
      text: 'SSI',
      left: 'center',
    };
    this.lineChart3.areaStyle = null

    //4
    this.lineChart4 = new LineChartModel();
    this.lineChart4.chartDate = [34, 42, 50, 12,13];
    this.lineChart4.xAxisDate = [
      'April 2022', 'March 2021', 'June 2022 ', 'May 2022'   
    ];
    this.lineChart4.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.lineChart4.title = {
      text: 'Needle Stick Injury Incidents Trend ',
      left: 'center',
    };
    // End-Lines***********


    // Gauge 1
    this.gaugeChart = new GaugePieModel();
    this.gaugeChart.data = [{ value: 45, name: 'Adult ICU' }];
    this.gaugeChart.max = 50;
    this.gaugeChart.min = 0;
    // Gauge 2
    this.gaugeChart2 = new GaugePieModel();
    this.gaugeChart2.data = [{ value: 66, name: 'Ward SSI ' }];
    this.gaugeChart2.max = 80;
    this.gaugeChart2.min = 0;
    // Gauge 3
    this.gaugeChart3 = new GaugePieModel();
    this.gaugeChart3.data = [{ value: 36, name: 'NICU ICU' }];
    this.gaugeChart3.max = 90;
    this.gaugeChart3.min = 0;


    // Bar IPC Program
    this.chartBars = new BarChartModel();
    this.chartBars.chartDate = [73, 14, 92, 71, 39, 86, 54, 100];
    this.chartBars.xAxisDate = [
      'Ain Shams',
      'Cairo',
      'Azhar',
      'Alexandria',
      'Aswan',
      'Assuit',
      'Beni Suif',
      'Suez Canal',
    ];
    this.chartBars.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.chartBars.title = {
      text: 'IPC Program',
      left: 'center',
    };

    // Bar Antimicrobial Stewardship
    this.chartBars2 = new BarChartModel();
    this.chartBars2.chartDate = [73, 14, 92, 71, 39, 86, 54, 100];
    this.chartBars2.xAxisDate = [
      'Ain Shams',
      'Cairo',
      'Azhar',
      'Alexandria',
      'Aswan',
      'Assuit',
      'Beni Suif',
      'Suez Canal',
    ];
    this.chartBars2.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.chartBars2.title = {
      text: 'Antimicrobial Stewardship',
      left: 'center',
    };

    // Bar Safe Injection
    this.chartBars3 = new BarChartModel();
    this.chartBars3.chartDate = [73, 14, 92, 71, 39, 86, 54, 100];
    this.chartBars3.xAxisDate = [
      'Ain Shams',
      'Cairo',
      'Azhar',
      'Alexandria',
      'Aswan',
      'Assuit',
      'Beni Suif',
      'Suez Canal',
    ];
    this.chartBars3.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.chartBars3.title = {
      text: 'Safe Injection',
      left: 'center',
    };
    // Bar Total Score
    this.chartBars4 = new BarChartModel();
    this.chartBars4.chartDate = [73, 14, 92, 71, 39, 86, 54, 100];
    this.chartBars4.xAxisDate = [
      'Ain Shams',
      'Cairo',
      'Azhar',
      'Alexandria',
      'Aswan',
      'Assuit',
      'Beni Suif',
      'Suez Canal',
    ];
    this.chartBars4.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.chartBars4.title = {
      text: 'Total Score',
      left: 'center',
    };
// line marker
 //4
 this.lineChart5 = new LineChartModel();
 this.lineChart5.chartDate = [34, 42, 50, 12,13];
 this.lineChart5.xAxisDate = [
   'April 2022', 'March 2021', 'June 2022 ', 'May 2022'   
 ];
 this.lineChart5.backgroundColor = 'rgba(180, 180, 180, 0.2)';
 this.lineChart5.title = {
   text: 'Needle Stick Injury Incidents',
   left: 'center',
 };
  }

  ngOnInit(): void {}

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  option2 = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  };
}
