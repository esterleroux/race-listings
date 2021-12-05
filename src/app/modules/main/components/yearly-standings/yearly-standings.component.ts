import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsService } from '../../services/results.service';
import { IDriverStanding } from '../../services/types';

@Component({
  selector: 'app-yearly-standings',
  templateUrl: './yearly-standings.component.html',
  styleUrls: ['./yearly-standings.component.scss']
})
export class YearlyStandingsComponent implements OnChanges, OnDestroy {

  // Get the year and winning driver from the parent component
  @Input() public year!: number;
  @Input() public driverCode!: string;

  public standings: IDriverStanding[] = [];
  public loading = true;
  public subscription: Subscription = new Subscription;

  // While getting all the race winners for the year, display a loader. Unsubscribe to avoid memory leaks

  constructor(
    private readonly resultService: ResultsService,
  ) { }

  public ngOnChanges(): void {
      this.subscription = this.resultService.getStandingsPerYear(this.year).subscribe(s => {
        this.standings = s;
        this.loading = false;
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
