// Create all interfaces that are required for type checking, and also create resulting interfaces to be displayed

export interface IYearlyWinners {
	year: number
	driver_full_name: string
  driver_position: number
	constructor: string
	driver_points: number
	driver_wins: number
	driver_nationality: string
  driver_id: string
}

export interface IDriverStandingsList {
  round: number
  season: number
  DriverStandings: IDriverStanding[]
}

export interface IDriverStanding {
  points: number
  position: number
  wins: number
  Driver: IDriver
  Constructors: IConstructor[]
}

export interface IDriver {
  driverId: string
  familyName: string
  givenName: string
  nationality: string
}

export interface IConstructor {
  constructorId: string
  name: string
  nationality: string
}

export interface ICircuits {
	most_wins_count: number;
  most_wins_driver: string;
  most_points_count: number;
  most_points_driver: string;
  most_wins_team_count: number;
  most_wins_team: string;
  circuit_winners: ICircuitWinner[]
}

export interface ICircuitWinner {
  driver_full_name: string
	constructor: string
	driver_points: number
	driver_nationality: string
  driver_id: string
  driver_lap_time: string
}

export interface IRace {
  date: string
  round: number
  raceName: string
  Results: IRaceResults[]
}

export interface IRaceResults {
  Constructor: IConstructor
  Driver: IDriver
  points: number
  laps: number
  grid: number
  Time: {
    time: string
  }
}

export interface ICircuitResult {
  name: string
  round: number
  date: string
  team: string
  driver_full_name: string
  driver_code: string
  points: number
  laps: number
  grid: number
  time: string
}
