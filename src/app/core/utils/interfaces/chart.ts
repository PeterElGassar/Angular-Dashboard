export class BarChartModel {
  chartDate: number[] = [];
  xAxisDate: string[] = [];
  backgroundColor: string = '';
  title: Title;
}
export class LineChartModel {
  chartDate: number[] = [];
  xAxisDate: string[] = [];
  backgroundColor: string = '';
  title: Title;
  isSmooth: boolean;
  areaStyle:any={};
}

export class ChartPieModel {
  title: Title;
  //  single chip style
  itemStyle?: PieItemStyle;
  //main data
  data: DataRow[] = [];
  // percentages of pie shape some times take this ['40%', '70%'] shape for dounats,
  // and this for {40%} pie shape
  radius: any ;

  isDounte:boolean = false;
}

class DataRow {
  value: number =0;
  name: string='';
}

class PieItemStyle {
  borderRadius?: number = 10;
  borderColor?: string = '#fff';
  borderWidth?: number = 2;
}

class Title {
  text: string = '';
  subtext?: string = '';
  left?: string = '';
  right?: string = '';
  bottom?: string = '';
  top?: string = '';
}



//Gauge************
export class GaugePieModel {
  min: number = 0;
  max: number = 0;
  name: string = '';
  //main data
  data: DataRow[] = [];
}


// option = {
//     tooltip: {
//       formatter: '{a} <br/>{b} : {c}%'
//     },
//     series: [
//       {
//           min: 0,
//         max: 50,
//         name: 'Pressure',
//         type: 'gauge',
//         progress: {
//           show: true
//         },
//         detail: {
//           valueAnimation: true,
//           formatter: '{value}'
//         },
//         data: [
//           {
//             value: 50,
//             name: 'SCORE'
//           }
//         ]
//       }
//     ]
//   };