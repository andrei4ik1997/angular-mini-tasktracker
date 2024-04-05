import {Routes} from '@angular/router';

const tasksRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./tasks.container'),
		title: 'Tasks',
	},
];

export default tasksRoutes;
