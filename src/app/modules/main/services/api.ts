import { Injectable } from '@angular/core';

const API_ENDPOINT: string = 'https://ergast.com/api/f1';

@Injectable()

export class F1Api {

  // Specify API Endpoints to be used

	public static get winnersSince2015(): string { return `${API_ENDPOINT}/driverStandings.json`; }

  public static winnersPerYear(year: number): string { return `${API_ENDPOINT}/${year}/results/1.json`; }

}
