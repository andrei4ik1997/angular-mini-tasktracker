import {Filters, Sort, Task} from '@shared';

export function sortTasks(tasks: Task[], sort: Sort): Task[] {
	const collator = new Intl.Collator('US', {numeric: true});
	const sorted = tasks
		.slice()
		.sort((a, b) => collator.compare(String(a[sort.field as keyof Task]), String(b[sort.field as keyof Task])));
	return sort.direction === 'ASC' ? sorted : sorted.reverse();
}

export function filterTasks(tasks: Task[], filter: Filters): Task[] {
	const filteredByStatus = tasks.filter((task) => {
		if (filter.statuses?.length) {
			return filter.statuses.includes(task.status);
		}
		return true;
	});
	const filteredByAssigners = filteredByStatus.filter((task) => {
		if (filter.assigners?.length) {
			return filter.assigners.some((assigner) => task.assigners?.includes(assigner));
		}
		return true;
	});
	const filteredByPeriod = filteredByAssigners.filter((task) => {
		if (filter.period?.start && filter.period?.end) {
			const start = new Date(filter.period.start).getTime();
			const end = new Date(filter.period.end).getTime();
			return task.deadline >= start && task.deadline <= end;
		}
		return true;
	});

	return filteredByPeriod;
}
