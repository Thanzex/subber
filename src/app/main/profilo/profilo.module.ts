import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfiloRoutingModule } from './profilo-routing.module';
import { ProfiloViewComponent } from './pagine/profilo-view/profilo-view.component';
import { TraduzioniViewComponent } from './pagine/traduzioni-view/traduzioni-view.component';
import { ValutazioniViewComponent } from './pagine/valutazioni-view/valutazioni-view.component';
import { ProfiloModificaComponent } from './pagine/profilo-modifica/profilo-modifica.component';


@NgModule({
  declarations: [ProfiloViewComponent, TraduzioniViewComponent, ValutazioniViewComponent, ProfiloModificaComponent],
  imports: [
    CommonModule,
    ProfiloRoutingModule
  ]
})
export class ProfiloModule { }
