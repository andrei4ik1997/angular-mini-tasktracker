import {Routes} from '@angular/router';
import {TASK_ID_FIELD} from './entities/constants';

const profileRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./components/task-wrapper/task-wrapper.component'),
		children: [
			{
				path: `:${TASK_ID_FIELD}`,
				loadComponent: () => import('./components/task/task.container'),
			},
		],
	},
];

export default profileRoutes;
