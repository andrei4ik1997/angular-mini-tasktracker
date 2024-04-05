import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore, Filters, Sort, Task} from '@shared';
import {tasksActions} from '@store/tasks/actions';
import {tasksSelectors} from '@store/tasks/selectors';
import {TasksComponent} from './tasks.component';

@Component({
	selector: 'tasks-container',
	template: `<tasks
		[tasks]="tasks$ | async"
		[tasksLoadingStatus]="tasksLoadingStatus$ | async"
		[tasksAssigners]="(tasksAssigners$ | async)!"
		[taskStatuses]="(taskStatuses$ | async)!"
		(addNewTask)="addNewTask($event)"
		(sortChanged)="sortChanged($event)"
		(filterChanged)="filterChanged($event)"
	/>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [TasksComponent, AsyncPipe],
})
export default class TasksContainer implements OnInit, OnDestroy {
	private readonly store = inject<Store<AppStore>>(Store);

	protected readonly tasks$ = this.store.select(tasksSelectors.tasks.filteredAndSorted);
	protected readonly tasksLoadingStatus$ = this.store.select(tasksSelectors.tasks.loadingStatus);
	protected readonly tasksAssigners$ = this.store.select(tasksSelectors.filterData.assigners);
	protected readonly taskStatuses$ = this.store.select(tasksSelectors.filterData.statuses);

	ngOnInit(): void {
		this.store.dispatch(tasksActions.getTasks.requested());
	}

	protected addNewTask(task: Task): void {
		this.store.dispatch(tasksActions.addTask.requested({payload: task}));
	}

	protected sortChanged(sortField: Sort | null): void {
		this.store.dispatch(tasksActions.setSort({payload: sortField}));
	}

	protected filterChanged(filter: Filters): void {
		this.store.dispatch(tasksActions.changeFilter({payload: filter}));
	}

	ngOnDestroy(): void {
		this.store.dispatch(tasksActions.destroyPage());
	}
}
