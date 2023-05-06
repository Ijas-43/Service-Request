import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: any | ApexAxisChartSeries;
  chart: any | ApexChart;
  dataLabels: any | ApexDataLabels;
  plotOptions: any | ApexPlotOptions;
  yaxis: any | ApexYAxis;
  xaxis: any | ApexXAxis;
  fill: any | ApexFill;
  tooltip: any | ApexTooltip;
  stroke: any | ApexStroke;
  legend: any | ApexLegend;
  title: any | ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  endingShape: any | '';
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(){

    this.chartOptions = {
      series: [
        {
          name: 'In-active Services',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66,24,5,120],
        },
        {
          name: 'Active Services',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94,25,10,2],
        },
        {
          name: 'Pending Services',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41,25],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val: any) => {
            '$ ' + val + ' thousands';
          },
        },
      },
    };
  }
ngOnInit(): void {

}
chartSeries: ApexNonAxisChartSeries = [40, 55, 28,32, 20];

chartDetails: ApexChart = {
  type: 'donut',
  toolbar: {
    show: true
  }
};
chartLabels = ["bike", "car", "van", "truck", "bus"];


 chartTitle: ApexTitleSubtitle = {
  text: 'Automotive Services',
  align:"center"
 };
chartDataLabels: ApexDataLabels = {
  enabled: true
};
}
