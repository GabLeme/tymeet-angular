import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';
import { ActivitiesService } from 'src/app/services/activities.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.getHorasTrabalhadas();
    this.fillGraphData();
  }

  chartTotalProject: any = [];
  labelsTotalProject: any = [];
  dataTotalProject: any = [];

  totalTime: string = '';

  getHorasTrabalhadas() {
    this.activitiesService.listTotalHours(localStorage.getItem('user_id')).subscribe((r) => {
      this.totalTime = this.convertMinsToHrsMins(r['data']['total']);
    })
  }

  convertMinsToHrsMins(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  }

  dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: any = [];

  gaugeData = [];
  gaugeDataActivityType = [];
  fillGraphData() {
    forkJoin([
      this.activitiesService.totalByProject(localStorage.getItem('user_id')),
      this.activitiesService.totalByActivityType(localStorage.getItem('user_id'))
    ]).subscribe((r) => {
      let dt: any = r[0]['data'] as Array<any>;
      dt.forEach((d) => {

        this.gaugeData.push({
          data: Number(d['total'] / 60).toFixed(2),
          label: d['projeto'],
          gaugeAppendText: 'Hrs'
        })
      })

      let dtTwo: any = r[1]['data'] as Array<any>;
      dtTwo.forEach((d) => {

        this.gaugeDataActivityType.push({
          data: Number(d['total'] / 60).toFixed(2),
          label: d['tipoAtividade'],
          gaugeAppendText: 'Hrs'
        })
      })
    })
  }
}


