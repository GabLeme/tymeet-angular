import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activities';
import { forkJoin } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { ActivitiesService } from 'src/app/services/activities.service';
import { ActivityTypeService } from 'src/app/services/activityType.service';
import { CentroCustoService } from 'src/app/services/centroCusto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService,
    private activitiesService: ActivitiesService,
    private acitivityTypeService: ActivityTypeService,
    private centroCustoService: CentroCustoService,
    private activateRoute: ActivatedRoute
  ) {
    this.activity = new Activity(localStorage.getItem('user_id'), '', '', '', '', '', 0, '', '');
  }

  activity: Activity;

  tipoAtividade: any;
  projetos: any;
  ccs: any;
  editId: any = '';
  

  ngOnInit(): void {
    this.editId = this.activateRoute.paramMap.subscribe((params) => {
      this.editId = params.get('id');
      if (this.editId) {
        this.activitiesService.listActivityById(this.editId).subscribe((r) => {
          const res = r['data'];
          this.activity = r['data'] as Activity;
          console.log(this.activity)
        })
      }
    })
    this.fillComboBox();
  }

  fillComboBox() {
    forkJoin([
      this.projectsService.list(localStorage.getItem('user_id')),
      this.acitivityTypeService.list(),
      this.centroCustoService.list()
    ]).subscribe((r) => {
      this.projetos = r[0]['data']
      this.tipoAtividade = r[1]['data']
      this.ccs = r[2]['data']
    })
  }

  hasAnyErrors: boolean = false;

  create() {
    const dataatividade = `${this.activity.dataAtividade['year']}-${this.activity.dataAtividade['month']}-${this.activity.dataAtividade['day']}`;
    this.activity.dataAtividade = dataatividade.toString();
    this.activitiesService.create(this.activity).subscribe((r) => {
      if (this.editId = '')
        this.activity = new Activity(localStorage.getItem('user_id'), '', '', '', '', '', 0, '', '');
    })
  }

}
