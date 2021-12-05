import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsService } from '../../services/results.service';
import { IYearlyWinners } from '../../services/types';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnDestroy {

  public winners: IYearlyWinners[] = [];
  public loading = true;
  public subscription: Subscription;

  constructor(
    private readonly resultService: ResultsService,
  ) {
    this.subscription = this.resultService.getWinnersSince2015().subscribe(r => {
      this.winners = r;
      this.loading = false;
    });
   }

   public ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }

}
