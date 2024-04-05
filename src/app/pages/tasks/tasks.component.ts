import {ChangeDetectionStrategy, Component, inject, input, output} from '@angular/core';
import {Router} from '@angular/router';
import {Filters, LoadingStatus, NoDataComponent, PageRoute, Sort, SpinnerComponent, Status, Task} from '@shared';
import {ActionPanelComponent} from './components/action-panel/action-panel.component';
import {FiltersComponent} from './components/filters/filters.component';
import {TaskComponent} from './components/task/task.component';

@Component({
	selector: 'tasks',
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [FiltersComponent, TaskComponent, SpinnerComponent, NoDataComponent, ActionPanelComponent],
})
export class TasksComponent {
	private readonly router = inject(Router);

	public readonly tasks = input.required<Task[] | null>();
	public readonly tasksLoadingStatus = input.required<LoadingStatus | null>();

	public readonly tasksAssigners = input.required<string[]>();
	public readonly taskStatuses = input.required<Status[]>();

	protected readonly addNewTask = output<Task>();
	protected readonly sortChanged = output<Sort | null>();
	protected readonly filterChanged = output<Filters>();

	protected openTask(task: Task): void {
		this.router.navigateByUrl(`${PageRoute.Task}/${task.id}`).catch(() => {});
	}
}
