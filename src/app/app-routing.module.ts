import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'gestione-spese', loadChildren: () => import('./gestione-spese/gestione-spese.module').then(m => m.GestioneSpeseModule) },
  { path: '**', redirectTo: 'gestione-spese' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
