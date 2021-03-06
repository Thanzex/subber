import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerieRoutingModule } from './serie-routing.module';
import { SerieHomeComponent } from './serie-home/serie-home.component';
import { SerieViewComponent } from './serie-view/serie-view.component';
import { StagioneViewComponent } from './stagione-view/stagione-view.component';
import { EpisodioViewComponent } from './episodio-view/episodio-view.component';
import { SerieHostComponent } from './serie-host.component';


@NgModule({
  declarations: [SerieHomeComponent, SerieViewComponent, StagioneViewComponent, EpisodioViewComponent, SerieHostComponent],
  imports: [
    CommonModule,
    SerieRoutingModule
  ]
})
export class SerieModule { }
