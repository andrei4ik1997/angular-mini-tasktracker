import {Priority, Status} from '@shared';

export interface Task {
	assigners?: string[];
	deadline: number;
	id: number | null;
	name: string;
	priority: Priority;
	status: Status;
	title: string;
}
