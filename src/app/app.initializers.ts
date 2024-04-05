import {TitleStrategy} from '@angular/router';
import {CustomTitleStrategyService} from '@services';

export const MODULE_PROVIDERS = [
	{
		provide: TitleStrategy,
		useClass: CustomTitleStrategyService,
	},
];

export const SERVICES = [];
