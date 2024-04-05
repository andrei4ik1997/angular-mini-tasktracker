import {Status} from '@shared';

export interface Filters {
	assigners?: string[];
	period?: {
		end: Date | null;
		start: Date | null;
	};
	statuses?: Status[];
}
