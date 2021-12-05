import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { F1Api } from './api';
import { map, Observable } from 'rxjs';
import { ICircuitResult, IDriverStanding, IDriverStandingsList, IRace, IYearlyWinners } from './types';

@Injectable({
  providedIn: 'root'
})

export class ResultsService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  /* The following parameters are used to get only the results since 2005, and no lazy loading - since
  all winners need to be displayed on one list */
  public getWinnersSince2015(): Observable<any> {
		return this.http.get<any>(F1Api.winnersSince2015, {
      params: {
        limit: '385',
        offset: '2716'
      },
    }).pipe(
      map(yearlyWinners => {
        let winners: IYearlyWinners[] = [];

        yearlyWinners.MRData.StandingsTable.StandingsLists.forEach((element: IDriverStandingsList) => {
          let winner: IYearlyWinners = {
            year: element.season,
            driver_full_name: `${element.DriverStandings[0].Driver.givenName} ${element.DriverStandings[0].Driver.familyName}`,
            driver_position: element.DriverStandings[0].position,
            constructor: element.DriverStandings[0].Constructors[0].name,
            driver_points: element.DriverStandings[0].points,
            driver_wins: element.DriverStandings[0].wins,
            driver_nationality: element.DriverStandings[0].Driver.nationality,
            driver_id: element.DriverStandings[0].Driver.driverId,
          }
          winners.push(winner);
        });
        return winners.reverse();
      }),
    );
	}

  public getStandingsPerYear(year: number): Observable<any> {
    let circuits: ICircuitResult[] = [];

		return this.http.get<any>(F1Api.winnersPerYear(year)).pipe(
      map(circuitWinners => {

        let circuits: ICircuitResult[] = [];

        circuitWinners.MRData.RaceTable.Races.forEach((round: IRace) => {
          let circuit: ICircuitResult = {
            name: round.raceName,
            round: round.round,
            date: round.date,
            team: round.Results[0].Constructor.name,
            driver_full_name: `${round.Results[0].Driver.givenName} ${round.Results[0].Driver.familyName}`,
            driver_code: round.Results[0].Driver.driverId,
            points: round.Results[0].points,
            laps: round.Results[0].laps,
            grid: round.Results[0].grid,
            time: round.Results[0].Time.time,
          }
          circuits.push(circuit);
        });
        return circuits;
      }),
    );;
	}

}
