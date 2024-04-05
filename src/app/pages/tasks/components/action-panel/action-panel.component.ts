import {ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, input, output} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {SORT_VALUES, Sort, Task} from '@shared';
import {AddNewTaskComponent} from '../add-new-task/add-new-task.component';

@Component({
	selector: 'action-panel',
	templateUrl: './action-panel.component.html',
	styleUrl: './action-panel.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [MatButtonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
})
export class ActionPanelComponent implements OnInit {
	private readonly formBuilder = inject(FormBuilder);
	private readonly matDialog = inject(MatDialog);
	private readonly destroyRef = inject(DestroyRef);

	public readonly disabled = input<boolean | undefined>(false);

	protected readonly addNewTask = output<Task>();
	protected readonly sortChanged = output<Sort | null>();

	protected readonly sortFormControl = this.formBuilder.control<Sort | null>(null);

	protected readonly sortValues = SORT_VALUES;

	ngOnInit(): void {
		this.subscribeControls();
	}

	private subscribeControls(): void {
		this.sortFormControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
			this.sortChanged.emit(value);
		});
	}

	protected openAddNewTaskDialog(): void {
		const dialogRef = this.matDialog.open<AddNewTaskComponent, unknown, Task>(AddNewTaskComponent, {
			autoFocus: false,
			width: '70vw',
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.addNewTask.emit(result);
			}
		});
	}
}
