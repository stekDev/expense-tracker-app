import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestioneSpeseComponent } from './gestione-spese.component';
import { GestioneSpeseRoutingModule } from './gestione-spese-routing.module';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PreviewCardComponent } from '../shared/components/preview-card/preview-card.component';
import { MainChartComponent } from '../shared/components/main-chart/main-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PreviewChartComponent } from '../shared/components/preview-chart/preview-chart.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { CrGestUtenzeComponent } from './components/cr-gest-utenze/cr-gest-utenze.component';
import { CrGestAltreComponent } from './components/cr-gest-altre/cr-gest-altre.component';
import { CrGestAlimComponent } from './components/cr-gest-alim/cr-gest-alim.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner';


@NgModule({
  declarations: [
    GestioneSpeseComponent,
    PreviewChartComponent,
    PreviewCardComponent,
    MainContentComponent,
    MainChartComponent,
    SideNavComponent,
    ToolbarComponent,
    DetailPageComponent,
    CrGestUtenzeComponent,
    CrGestAltreComponent,
    CrGestAlimComponent,
    // SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxChartsModule,
    GestioneSpeseRoutingModule,
  ]
})
export class GestioneSpeseModule { }
