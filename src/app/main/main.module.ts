import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { SerieModule } from './serie/serie.module';

@NgModule({
  declarations: [DashboardComponent, MainComponent, NavComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SerieModule
  ]
})
export class MainModule { }
