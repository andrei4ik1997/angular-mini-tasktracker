import {ApplicationConfig} from '@angular/core';
import {provideEffects} from '@ngrx/effects';
import {provideState} from '@ngrx/store';
import {TasksApiService} from './tasks/api/tasks.api.service';
import {TasksEffects} from './tasks/effects';
import {TASKS_FEATURE_KEY} from './tasks/entities/constants';
import {tasksReducer} from './tasks/reducer';

export const storeConfig: ApplicationConfig = {
	providers: [provideState(TASKS_FEATURE_KEY, tasksReducer), provideEffects([TasksEffects]), TasksApiService],
};
