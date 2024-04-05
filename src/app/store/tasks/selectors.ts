import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TASKS_FEATURE_KEY} from './entities/constants';
import {filterTasks, sortTasks} from './entities/functions';
import {TasksState} from './entities/interfaces';

const getState = createFeatureSelector<TasksState>(TASKS_FEATURE_KEY);

const getTasks = createSelector(getState, (state) => state.tasks);
const getTasksLoadingStatus = createSelector(getState, (state) => state.tasksLoadingStatus);

const getTask = createSelector(getState, (state) => state.task);
const getTaskLoadingStatus = createSelector(getState, (state) => state.taskLoadingStatus);

const getSort = createSelector(getState, (state) => state.sort);

const getSelectedFilters = createSelector(getState, (state) => state.filters);

const getAllStatuses = createSelector(getTasks, (tasks) => {
	const statuses = tasks.map((task) => task.status);
	return [...new Set(statuses)];
});
const getAllAssigners = createSelector(getTasks, (tasks) => {
	const assigners = tasks.map((task) => task.assigners ?? []);
	return [...new Set(assigners.flat())];
});

const filteredTasks = createSelector(getTasks, getSelectedFilters, (tasks, filters) =>
	filters ? filterTasks(tasks, filters) : tasks
);

const filteredAndSorted = createSelector(filteredTasks, getSort, (tasks, sort) =>
	sort ? sortTasks(tasks, sort) : tasks
);

export const tasksSelectors = {
	tasks: {
		data: getTasks,
		filteredAndSorted: filteredAndSorted,
		loadingStatus: getTasksLoadingStatus,
	},
	task: {data: getTask, loadingStatus: getTaskLoadingStatus},
	filterData: {
		statuses: getAllStatuses,
		assigners: getAllAssigners,
		selectedFilters: getSelectedFilters,
	},
};
