import { Component, OnInit } from '@angular/core';
import { BarChartModel, ChartPieModel, GaugePieModel } from 'src/app/core/utils/interfaces/chart';

@Component({
  selector: 'app-needle-stick-injury',
  templateUrl: './needle-stick-injury.component.html',
  styleUrls: ['./needle-stick-injury.component.scss']
})
export class NeedleStickInjuryComponent implements OnInit {

  title = 'Needle Stick Injury';
  chartMonthly: BarChartModel;
  // pies
  dounteChart: ChartPieModel;
  dounteChart2: ChartPieModel;
  dounteChart3: ChartPieModel;
  // Gauges
  gaugeChart: GaugePieModel;
  gaugeChart2: GaugePieModel;
  gaugeChart3: GaugePieModel;

  gaugeHIVChart: GaugePieModel;
  gaugeHCBChart: GaugePieModel;
  gaugeHBVChart: GaugePieModel;

  gaugeHIVChart1: GaugePieModel;
  gaugeHCBChart1: GaugePieModel;
  gaugeHBVChart1: GaugePieModel;
  // Bars
  chartBars: BarChartModel;
  chartBars2: BarChartModel;
  chartBars3: BarChartModel;
  chartBars4: BarChartModel;

  constructor() {
    this.chartMonthly = new BarChartModel();

    

    //*******Dounte HAI ICU Infections*******
    this.dounteChart = new ChartPieModel();

    this.dounteChart.data = [
      { value: 34, name: '<30 years' },
      { value: 75, name: '30- 40 years' },
      { value: 80, name: '40-50 years' },
      { value: 63, name: '>50 years' },
    ];

    this.dounteChart.title = {
      text: 'Age',
      left: 'center',
    };
    this.dounteChart.radius = ['40%', '70%'];
    this.dounteChart.isDounte = true;
    // ************

    //*******Dounte Injury Status *******
    this.dounteChart2 = new ChartPieModel();

    this.dounteChart2.data = [
      { value: 13, name: 'Superficial' },
      { value: 34, name: 'Moderate' },
      { value: 76, name: 'Severe' },
    ];
    this.dounteChart2.title = {
      text: 'Injury Status',
      left: 'center',
    };
    this.dounteChart2.radius = ['40%', '70%'];
    this.dounteChart2.isDounte = true;
    // ************

    //*******Dounte Post-Exposure prophylaxis Training *******
    this.dounteChart3 = new ChartPieModel();

    this.dounteChart3.data = [
      { value: 13, name: 'Yes' },
      { value: 34, name: 'No' },
    ];
    this.dounteChart3.title = {
      text: 'Post-Exposure prophylaxis Training',
      left: 'center',
    };
    this.dounteChart3.radius = ['40%', '70%'];
    this.dounteChart3.isDounte = true;
    // ************



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
    
    // Gauge HIV  
    this.gaugeHIVChart = new GaugePieModel();
    this.gaugeHIVChart.data = [{ value: 36, name: 'HIV' }];
    this.gaugeHIVChart.max = 50;
    this.gaugeHIVChart.min = 0;
    // Gauge HCB  
    this.gaugeHCBChart = new GaugePieModel();
    this.gaugeHCBChart.data = [{ value: 66, name: 'HCB' }];
    this.gaugeHCBChart.max = 80;
    this.gaugeHCBChart.min = 0;
    // Gauge  HBV 
    this.gaugeHBVChart = new GaugePieModel();
    this.gaugeHBVChart.data = [{ value: 36, name: 'HBV' }];
    this.gaugeHBVChart.max = 90;
    this.gaugeHBVChart.min = 0;

    
    // Gauge HIV  Health Care Worker  
    this.gaugeHIVChart1 = new GaugePieModel();
    this.gaugeHIVChart1.data = [{ value: 36, name: 'HIV' }];
    this.gaugeHIVChart1.max = 50;
    this.gaugeHIVChart1.min = 0;
    // Gauge HCB  Health Care Worker 
    this.gaugeHCBChart1 = new GaugePieModel();
    this.gaugeHCBChart1.data = [{ value: 66, name: 'HCB' }];
    this.gaugeHCBChart1.max = 80;
    this.gaugeHCBChart1.min = 0;
    // Gauge  HBV Health Care Worker 
    this.gaugeHBVChart1 = new GaugePieModel();
    this.gaugeHBVChart1.data = [{ value: 36, name: 'HBV' }];
    this.gaugeHBVChart1.max = 90;
    this.gaugeHBVChart1.min = 0;








    // Bar Occupation
    this.chartBars = new BarChartModel();
    this.chartBars.chartDate = [73, 14, 92, 71, 39, 86, 54, 100,53];
    this.chartBars.xAxisDate = [
      'Physician', 'Surgeon', 'Technician', 'Maintenance/Housekeeping', 'Dental', 'Student/Resident', 'Nurse', 'Pharmacist', 'Others' 
    ];
    this.chartBars.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.chartBars.title = {
      text: 'Occupation',
      left: 'center',
    };

    // Bar Location of the Accident
    this.chartBars2 = new BarChartModel();
    this.chartBars2.chartDate = [73, 24, 92, 71, 69, 86, 54, 100,37];
    this.chartBars2.xAxisDate = [
      'Operating Room', 'Procedure Room', 'Outpatient', 'Emergency Department', 'Laboratories', 
      'Waste/Laundry/Central service', 'Inpatient Unit', 'Sampling room', 'Unknown'
    ];
    this.chartBars2.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.chartBars2.title = {
      text: 'Antimicrobial Stewardship',
      left: 'center',
    };


    // Bar Types of Activity During Incidence
    this.chartBars3 = new BarChartModel();
    this.chartBars3.chartDate = [73, 14, 72, 71, 39, 86, 54, 100,43,53];
    this.chartBars3.xAxisDate = [
      'Surgery', 'Needle Recapping', 'Blood Sampling', 'Samples Processing', 'Percutaneous Injection',
       'Drug Preparation', 'Insert IV Line', 'IV Line Access','Waste Cleaning', 'Unknown'
    ];
    this.chartBars3.backgroundColor = 'rgba(180, 180, 180, 0.2)';
    this.chartBars3.title = {
      text: 'Types of Activity During Incidence',
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
