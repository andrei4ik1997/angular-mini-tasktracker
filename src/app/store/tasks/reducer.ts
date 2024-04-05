import {Action, createReducer, on} from '@ngrx/store';
import {Task, loadingStatus} from '@shared';
import {tasksActions} from './actions';
import {TasksState} from './entities/interfaces';

const initialState: TasksState = {
	tasks: [],
	tasksLoadingStatus: loadingStatus.loading,
	task: null,
	taskLoadingStatus: loadingStatus.loading,
	sort: null,
	filters: null,
};

const reducer = createReducer(
	initialState,
	on(tasksActions.getTasks.requested, (state) => ({
		...state,
		tasks: initialState.tasks,
		tasksLoadingStatus: loadingStatus.loading,
	})),
	on(tasksActions.getTasks.succeeded, (state, action) => ({
		...state,
		tasks: action.payload,
		tasksLoadingStatus: loadingStatus.loaded,
	})),
	on(tasksActions.getTasks.failed, (state) => ({
		...state,
		tasks: initialState.tasks,
		tasksLoadingStatus: loadingStatus.loaded,
	})),
	on(tasksActions.addTask.succeeded, (state, payload) => ({
		...state,
		tasks: state.tasks.concat(payload.payload satisfies Task),
	})),
	on(tasksActions.getTask.requested, (state) => ({
		...state,
		task: initialState.task,
		taskLoadingStatus: loadingStatus.loading,
	})),
	on(tasksActions.getTask.succeeded, (state, action) => ({
		...state,
		task: action.payload,
		taskLoadingStatus: loadingStatus.loaded,
	})),
	on(tasksActions.getTask.failed, (state) => ({
		...state,
		task: initialState.task,
		taskLoadingStatus: loadingStatus.loaded,
	})),
	on(tasksActions.setSort, (state, payload) => ({
		...state,
		sort: payload.payload,
	})),
	on(tasksActions.changeFilter, (state, payload) => ({
		...state,
		filters: {...state.filters, ...payload.payload},
	})),
	on(tasksActions.destroyPage, (state) => ({
		...state,
		...initialState,
	}))
);

export function tasksReducer(state: TasksState | undefined, action: Action): TasksState {
	return reducer(state, action);
}
