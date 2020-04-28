import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { HistoryActivityComponent } from './components/history-activity/history-activity.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activity/add', component: AddActivityComponent },
  { path: 'activity/edit/:id', component: AddActivityComponent },
  { path: 'activity/history', component: HistoryActivityComponent },
  { path: 'admin/analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
