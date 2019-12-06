import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreaStagioneComponent } from './pagine/crea-stagione/crea-stagione.component';
import { ModificaStagioneComponent } from './pagine/modifica-stagione/modifica-stagione.component';
import { ValutaComponent } from './pagine/valuta/valuta.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: ':id', children: [
          {
            path: 'stagione', children: [
              { path: 'crea', component: CreaStagioneComponent },
              {
                path: ':stagione', children: [
                  { path: 'modifica', component: ModificaStagioneComponent },
                ]
              },
              { path: '**', redirectTo: '/' }
            ]
          },
          {
            path: 'traduzione', children: [
              { path: 'crea', component: CreaStagioneComponent },
              {
                path: ':episodio', children: [
                  { path: 'modifica', component: ModificaStagioneComponent },
                  { path: 'valuta', component: ValutaComponent },
                ]
              },
              { path: '**', redirectTo: '/' }
            ]
          },
        ]
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
