import {Injectable, inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ToastService} from '@services';
import {mapActionsFn} from '@shared';
import {switchMap, tap} from 'rxjs';
import {tasksActions} from './actions';
import {TasksApiService} from './api/tasks.api.service';

@Injectable()
export class TasksEffects {
	private readonly actions$ = inject(Actions);
	private readonly tasksApiService = inject(TasksApiService);

	private readonly getTasks$ = createEffect(() =>
		this.actions$.pipe(
			ofType(tasksActions.getTasks.requested),
			switchMap(() => this.tasksApiService.getTasks().pipe(mapActionsFn(tasksActions.getTasks)))
		)
	);

	private readonly addTask$ = createEffect(() =>
		this.actions$.pipe(
			ofType(tasksActions.addTask.requested),
			switchMap((action) =>
				this.tasksApiService.addTask(action.payload).pipe(mapActionsFn(tasksActions.addTask as any))
			)
		)
	);

	private readonly addTaskSucceeded$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(tasksActions.addTask.succeeded),
				tap(() => {
					ToastService.success({
						message: 'New task has been successfully added',
					});
				})
			),
		{
			dispatch: false,
		}
	);

	private readonly addTaskFailed$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(tasksActions.addTask.failed),
				tap(() => {
					ToastService.error({
						message: 'New task has not been added',
					});
				})
			),
		{
			dispatch: false,
		}
	);

	private readonly getTask$ = createEffect(() =>
		this.actions$.pipe(
			ofType(tasksActions.getTask.requested),
			switchMap((action) =>
				this.tasksApiService.getTask(action.payload).pipe(mapActionsFn(tasksActions.getTask as any))
			)
		)
	);

	private readonly changeTaskInfo$ = createEffect(() =>
		this.actions$.pipe(
			ofType(tasksActions.changeTaskInfo.requested),
			switchMap((action) =>
				this.tasksApiService
					.changeTaskInfo(action.taskId, action.payload)
					.pipe(mapActionsFn(tasksActions.changeTaskInfo as any))
			)
		)
	);

	private readonly changeTaskInfoSucceeded$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(tasksActions.changeTaskInfo.succeeded),
				tap(() => {
					ToastService.success({
						message: 'Task has been successfully changed',
					});
				})
			),
		{
			dispatch: false,
		}
	);

	private readonly changeTaskInfoFailed$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(tasksActions.changeTaskInfo.failed),
				tap(() => {
					ToastService.error({
						message: 'Task has not been changed',
					});
				})
			),
		{
			dispatch: false,
		}
	);
}
