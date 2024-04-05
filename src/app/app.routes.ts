import {Routes} from '@angular/router';
import {PageRoute} from '@shared';

export const APP_ROUTES: Routes = [
	{path: '', redirectTo: PageRoute.Tasks, pathMatch: 'full'},
	{path: PageRoute.Tasks, loadChildren: () => import('./pages/tasks/tasks.routes')},
	{path: PageRoute.Task, loadChildren: () => import('./pages/task/task.routes')},
	{path: PageRoute.NotFound, loadChildren: () => import('./pages/not-found/not-found.routes')},
	{
		path: '**',
		redirectTo: PageRoute.NotFound,
		pathMatch: 'full',
	},
];
