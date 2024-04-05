import {ApplicationConfig} from '@angular/core';
import {provideEffects} from '@ngrx/effects';

export const storeConfig: ApplicationConfig = {
	providers: [provideEffects([])],
};
