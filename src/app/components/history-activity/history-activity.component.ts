import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-activity',
  templateUrl: './history-activity.component.html',
  styleUrls: ['./history-activity.component.scss']
})
export class HistoryActivityComponent implements OnInit {

  constructor(
    private activitiesService: ActivitiesService,
    private router: Router
  ) { }

  activities: any = [];

  ngOnInit(): void {
    this.listActivities();
  }

  listActivities() {
    this.activitiesService.listByUser(localStorage.getItem('user_id')).subscribe((r) => {
      //console.log(r)
      this.activities = r['data'];
    })
  }

  time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  }


  editActivity(id) {
    this.router.navigate(['/activity/edit/', id])
  }

}
