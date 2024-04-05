import {ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, input, output} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {DateAdapter, provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {Filters, Status} from '@shared';

@Component({
	selector: 'filters',
	templateUrl: './filters.component.html',
	styleUrl: './filters.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [ReactiveFormsModule, MatSelectModule, MatDatepickerModule, MatButtonModule],
	providers: [provideNativeDateAdapter()],
})
export class FiltersComponent implements OnInit {
	private readonly formBuilder = inject(FormBuilder);
	private readonly destroyRef = inject(DestroyRef);
	private readonly dateAdapter = inject<DateAdapter<Date>>(DateAdapter);

	public readonly tasksAssigners = input.required<string[]>();
	public readonly taskStatuses = input.required<Status[]>();
	public readonly tasksCount = input.required<number>();

	protected readonly filterChanged = output<Filters>();

	protected readonly range = this.formBuilder.group({
		start: this.formBuilder.control<Date | null>(null),
		end: this.formBuilder.control<Date | null>(null),
	});
	protected readonly statusFormControl = this.formBuilder.nonNullable.control<Status[]>([]);
	protected readonly assignerFormControl = this.formBuilder.nonNullable.control<string[]>([]);

	ngOnInit(): void {
		this.setMondayFirstToDatePicker();
		this.subscribeControls();
	}

	private setMondayFirstToDatePicker(): void {
		this.dateAdapter.getFirstDayOfWeek = () => 1;
	}

	private subscribeControls(): void {
		this.statusFormControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
			this.filterChanged.emit({statuses: value});
		});

		this.assignerFormControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
			this.filterChanged.emit({assigners: value});
		});

		this.range.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
			if (value.start && value.end) {
				this.filterChanged.emit({
					period: value as {
						end: Date | null;
						start: Date | null;
					},
				});
			}
		});
	}

	protected clear(): void {
		const emptyFilters = {
			assigners: [],
			period: {
				end: null,
				start: null,
			},
			statuses: [],
		} satisfies Filters;

		this.assignerFormControl.reset();
		this.statusFormControl.reset();
		this.range.reset();
		this.filterChanged.emit(emptyFilters);
	}
}
