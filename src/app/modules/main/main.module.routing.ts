import { Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';

export const MainRoutes: Routes = [
	{
		path: '', redirectTo: 'winners', pathMatch: 'full',
	},
	{
		path: 'winners',
		component: ResultsComponent,
	},
];
