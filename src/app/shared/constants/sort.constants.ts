import {Sort} from '@shared';

export const SORT_VALUES: Sort[] = [
	{
		field: 'status',
		viewValue: 'status ↑',
		direction: 'ASC',
	},
	{
		field: 'status',
		viewValue: 'status ↓',
		direction: 'DESC',
	},
	{field: 'deadline', viewValue: 'deadline ↑', direction: 'ASC'},
	{field: 'deadline', viewValue: 'deadline ↓', direction: 'DESC'},
	{field: 'assigners', viewValue: 'assigners ↑', direction: 'ASC'},
	{field: 'assigners', viewValue: 'assigners ↓', direction: 'DESC'},
];
