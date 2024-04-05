import {ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {DateAdapter, provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {NoDataComponent, Priority, Status, Task} from '@shared';
import {PRIORITIES, STATUSES, USERS} from './entities/constants';

@Component({
	selector: 'add-new-task',
	templateUrl: './add-new-task.component.html',
	styleUrl: './add-new-task.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	providers: [provideNativeDateAdapter()],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
		MatDialogClose,
		ReactiveFormsModule,
		MatSelectModule,
		MatAutocompleteModule,
		MatDatepickerModule,
		NoDataComponent,
	],
})
export class AddNewTaskComponent implements OnInit {
	private readonly matDialogRef = inject<MatDialogRef<AddNewTaskComponent>>(MatDialogRef);
	private readonly formBuilder = inject(FormBuilder);
	private readonly destroyRef = inject(DestroyRef);
	private readonly dateAdapter = inject<DateAdapter<Date>>(DateAdapter);

	protected readonly taskFormGroup = this.formBuilder.group({
		deadline: this.formBuilder.nonNullable.control('', Validators.required),
		name: this.formBuilder.nonNullable.control('', Validators.required),
		assigner: this.formBuilder.nonNullable.control('', Validators.required),
		priority: this.formBuilder.nonNullable.control<Priority>('' as Priority, Validators.required),
		status: this.formBuilder.nonNullable.control<Status>('' as Status, Validators.required),
		title: this.formBuilder.nonNullable.control('', Validators.required),
	});

	protected readonly statuses = STATUSES;
	protected readonly priorities = PRIORITIES;
	protected readonly users = USERS;

	protected readonly minDate = signal(new Date());
	protected readonly filteredUsers = signal(this.users);

	ngOnInit(): void {
		this.setMondayFirstToDatePicker();
		this.performerControlSubscription();
	}

	private setMondayFirstToDatePicker(): void {
		this.dateAdapter.getFirstDayOfWeek = () => 1;
	}

	private performerControlSubscription(): void {
		this.taskFormGroup.controls.assigner.valueChanges
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				const filterValue = (value ?? '').toLowerCase();
				this.filteredUsers.set(this.users.filter((user) => user.toLowerCase().includes(filterValue)));
			});
	}

	protected close(): void {
		this.matDialogRef.close();
	}

	protected add(): void {
		const formValue = this.taskFormGroup.getRawValue();
		const newTask = {
			...formValue,
			id: new Date().getTime(),
			deadline: new Date(formValue.deadline).getTime(),
			assigners: [formValue.assigner],
		} satisfies Task;

		this.matDialogRef.close(newTask);
	}
}
