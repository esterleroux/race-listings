import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearlyStandingsComponent } from './components/yearly-standings/yearly-standings.component';
import { ResultsComponent } from './components/results/results.component';
import { ResultsService } from './services/results.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './main.module.routing';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    YearlyStandingsComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MainRoutes),
    TableModule,
    ButtonModule,
  ],
  providers: [
    ResultsService,
  ],
  exports: [
    ResultsComponent,
  ]
})
export class MainModule { }
