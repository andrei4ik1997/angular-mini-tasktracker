import {createAction, props} from '@ngrx/store';
import {Filters, Sort, Task, getActionDescription, getApiActions, getApiActionsWithPayload} from '@shared';
import {TASKS_FEATURE_KEY} from './entities/constants';

const actionDescription = (description: string) => getActionDescription(TASKS_FEATURE_KEY.toUpperCase(), description);

export const tasksActions = {
	getTasks: getApiActions(TASKS_FEATURE_KEY.toUpperCase(), 'Get Tasks', props<{payload: Task[]}>()),
	addTask: getApiActionsWithPayload(
		TASKS_FEATURE_KEY.toUpperCase(),
		'Add Task',
		props<{payload: Task}>(),
		props<{payload: Task}>()
	),
	getTask: getApiActionsWithPayload(
		TASKS_FEATURE_KEY.toUpperCase(),
		'Get Task',
		props<{payload: number | null}>(),
		props<{payload: Task}>()
	),
	changeTaskInfo: getApiActionsWithPayload(
		TASKS_FEATURE_KEY.toUpperCase(),
		'Change Task info',
		props<{payload: Partial<Task>; taskId: number | null}>(),
		props<{payload: Task}>()
	),
	setSort: createAction(actionDescription('Sort changed'), props<{payload: Sort | null}>()),
	changeFilter: createAction(actionDescription('Filter changed'), props<{payload: Filters}>()),
	destroyPage: createAction(actionDescription('Destroy page')),
};
