import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {DatePipe} from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	ElementRef,
	OnInit,
	computed,
	effect,
	inject,
	input,
	output,
	signal,
	viewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {LoadingStatus, NoDataComponent, SpinnerComponent, Status, Task} from '@shared';

@Component({
	selector: 'task',
	templateUrl: './task.component.html',
	styleUrl: './task.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		MatCardModule,
		NoDataComponent,
		DatePipe,
		SpinnerComponent,
		MatFormFieldModule,
		MatAutocompleteModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSelectModule,
		MatChipsModule,
		MatIconModule,
	],
})
export class TaskComponent implements OnInit {
	private readonly formBuilder = inject(FormBuilder);
	private readonly destroyRef = inject(DestroyRef);

	public readonly task = input.required<Task | null>();
	public readonly taskLoadingStatus = input.required<LoadingStatus | null>();

	protected readonly changeTaskInfo = output<Partial<Task>>();

	private readonly performerInput = viewChild.required<string, ElementRef<HTMLInputElement>>('performerInput', {
		read: ElementRef,
	});

	protected readonly performerFormControl = this.formBuilder.nonNullable.control('', Validators.required);
	protected readonly statusFormControl = this.formBuilder.nonNullable.control<Status>(
		'' as Status,
		Validators.required
	);

	protected readonly statuses = [Status.Done, Status.InProgress];
	private readonly users = ['User 1', 'User 2', 'User 3'];
	protected readonly separatorKeysCodes: number[] = [ENTER, COMMA];
	protected readonly assigners = signal<string[] | null>([]);
	protected readonly filteredUsers = computed(() => this.users.filter((user) => !this.assigners()?.includes(user)));

	constructor() {
		effect(
			() => {
				if (this.task()) {
					const task = this.task() as Task;
					this.statusFormControl.setValue(task.status, {emitEvent: false});
					this.assigners.set(task.assigners ?? null);
				}
			},
			{allowSignalWrites: true}
		);
	}

	ngOnInit(): void {
		this.subscribeControls();
	}

	private subscribeControls(): void {
		this.statusFormControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
			this.changeTaskInfo.emit({status: value});
		});
	}

	protected add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();

		if (value) {
			const newUsers = this.assigners() ? [...(this.assigners() as string[]), value] : [value];
			this.updateUsers(newUsers);
		}

		event.chipInput.clear();

		this.performerFormControl.setValue('');
	}

	protected remove(value: string): void {
		const newUsers = this.assigners()?.filter((user) => user !== value);
		this.updateUsers(newUsers ?? []);
	}

	protected selected(event: MatAutocompleteSelectedEvent): void {
		const newUsers = this.assigners()
			? [...(this.assigners() as string[]), event.option.viewValue]
			: [event.option.viewValue];

		this.updateUsers(newUsers);

		this.performerInput().nativeElement.value = '';
		this.performerFormControl.setValue('');
	}

	private updateUsers(newUsers: string[]): void {
		this.assigners.set(newUsers);
		this.changeTaskInfo.emit({assigners: newUsers});
	}
}
