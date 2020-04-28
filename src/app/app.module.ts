import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ActivitiesService } from './services/activities.service';
import { ClientsService } from './services/clients.service';
import { AuthService } from './services/auth.service';
import { ProjectsService } from './services/projects.service';
import { ActivityTypeService } from './services/activityType.service';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { FormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { HistoryActivityComponent } from './components/history-activity/history-activity.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddActivityComponent,
    AnalyticsComponent,
    HistoryActivityComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    NoopAnimationsModule,
    NgbModule,
    ChartsModule,
    NgxGaugeModule,
    MatTabsModule,
    NgxPaginationModule
  ],
  providers: [
    ActivitiesService,
    AuthService,
    ProjectsService,
    ActivityTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
