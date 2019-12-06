import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { CreaTraduzioneComponent } from './pagine/crea-traduzione/crea-traduzione.component';
import { ModificaTraduzioneComponent } from './pagine/modifica-traduzione/modifica-traduzione.component';
import { CreaStagioneComponent } from './pagine/crea-stagione/crea-stagione.component';
import { ModificaStagioneComponent } from './pagine/modifica-stagione/modifica-stagione.component';
import { ValutaComponent } from './pagine/valuta/valuta.component';


@NgModule({
  declarations: [CreaTraduzioneComponent, ModificaTraduzioneComponent, CreaStagioneComponent, ModificaStagioneComponent, ValutaComponent],
  imports: [
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
