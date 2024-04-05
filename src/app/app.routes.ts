import {Routes} from '@angular/router';
import {PageRoute} from '@shared';

export const APP_ROUTES: Routes = [
	{
		path: '**',
		redirectTo: PageRoute.NotFound,
		pathMatch: 'full',
	},
];
