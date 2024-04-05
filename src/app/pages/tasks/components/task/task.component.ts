import {DatePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {NoDataComponent, Task} from '@shared';

@Component({
	selector: 'task',
	templateUrl: './task.component.html',
	styleUrl: './task.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [MatCardModule, NoDataComponent, DatePipe],
})
export class TaskComponent {
	public readonly task = input.required<Task>();
}
