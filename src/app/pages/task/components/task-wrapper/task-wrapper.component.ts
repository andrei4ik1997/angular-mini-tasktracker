import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
	selector: 'task-wrapper',
	templateUrl: './task-wrapper.component.html',
	styleUrl: './task-wrapper.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterOutlet],
})
export default class TaskWrapperComponent {}
