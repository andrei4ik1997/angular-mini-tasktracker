import {Routes} from '@angular/router';

const notFoundRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./not-found.container'),
	},
];

export default notFoundRoutes;
