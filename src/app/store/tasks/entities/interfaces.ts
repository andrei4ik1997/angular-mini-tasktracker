import {Filters, LoadingStatus, Sort, Task} from '@shared';

export interface TasksState {
	filters: Filters | null;
	sort: Sort | null;
	task: Task | null;
	taskLoadingStatus: LoadingStatus;
	tasks: Task[];
	tasksLoadingStatus: LoadingStatus;
}
