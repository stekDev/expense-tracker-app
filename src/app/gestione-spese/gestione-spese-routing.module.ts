import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../shared/material/material.module";
import { DetailPageComponent } from "./components/detail-page/detail-page.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { GestioneSpeseComponent } from "./gestione-spese.component";


const routes:Routes = [
  {path: '', component: GestioneSpeseComponent, children: [
    { path: '', component: MainContentComponent },
    { path: ':section/dettaglio', component: DetailPageComponent },
  ]},
  {path: '**', redirectTo: '' },
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class GestioneSpeseRoutingModule {}