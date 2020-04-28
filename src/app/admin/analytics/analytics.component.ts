import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { forkJoin } from 'rxjs';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor(private userService: AuthService, private activityService: ActivitiesService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  selectedUser: string = '';

  users: any = [];

  dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };


  listUsers() {
    this.userService.listAll().subscribe((u) => {
      let temp = u as Array<any>;
      this.users = temp['data'];
      console.log(this.users)
    })
  }

  gaugeDataProject = [];
  gaugeDataActivityType = [];
  totalHours = '';

  getMetricas() {
    this.gaugeDataActivityType.length = 0;
    this.gaugeDataProject.length = 0;
    forkJoin([
      this.activityService.totalByProject(this.selectedUser),
      this.activityService.totalByActivityType(this.selectedUser),
      this.activityService.listTotalHours(this.selectedUser),
    ]).subscribe((r) => {
      let dt: any = r[0]['data'] as Array<any>;
      dt.forEach((d) => {

        this.gaugeDataProject.push({
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

      this.totalHours = this.convertMinsToHrsMins(r[2]['data']['total']);
    })
  }

  convertMinsToHrsMins(mins) {
    let temp = Number(mins / 60).toFixed(2);
    return `${temp.split('.')[0]}:${temp.split('.')[1]}`;
  }
}
