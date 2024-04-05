import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, input, numberAttribute} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore, Task} from '@shared';
import {tasksActions} from '@store/tasks/actions';
import {tasksSelectors} from '@store/tasks/selectors';
import {TaskComponent} from './task.component';

@Component({
	selector: 'task-container',
	template: `<task
		[task]="task$ | async"
		[taskLoadingStatus]="taskLoadingStatus$ | async"
		(changeTaskInfo)="changeTaskInfo($event)"
	/>`,
	styleUrl: './task.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [TaskComponent, AsyncPipe],
})
export default class TaskContainer implements OnInit, OnDestroy {
	private readonly store = inject<Store<AppStore>>(Store);

	public readonly taskId = input(null, {alias: 'taskID', transform: numberAttribute});

	protected readonly task$ = this.store.select(tasksSelectors.task.data);
	protected readonly taskLoadingStatus$ = this.store.select(tasksSelectors.task.loadingStatus);

	ngOnInit(): void {
		this.store.dispatch(tasksActions.getTask.requested({payload: this.taskId() ?? null}));
	}

	protected changeTaskInfo(data: Partial<Task>): void {
		this.store.dispatch(tasksActions.changeTaskInfo.requested({payload: data, taskId: this.taskId()}));
	}

	ngOnDestroy(): void {
		this.store.dispatch(tasksActions.destroyPage());
	}
}
