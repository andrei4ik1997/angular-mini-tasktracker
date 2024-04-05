import {Params} from '@angular/router';
import {ActionCreator, NotAllowedCheck} from '@ngrx/store';
import {TypedAction} from '@ngrx/store/src/models';

export interface AppStore {}

export interface ErrorPayload {
	error: string;
}

export interface ApiActions<
	T1 extends Params,
	T2 extends Params = Params,
	S1 extends string = string,
	S2 extends string = string,
> {
	failed: ActionCreator<string, (props: ErrorPayload) => ErrorPayload & TypedAction<string>>;
	requested: ActionCreator<S2, (props?: T2 & NotAllowedCheck<T2>) => T2 & TypedAction<S2>>;
	succeeded: ActionCreator<S1, (props: T1 & NotAllowedCheck<T1>) => T1 & TypedAction<S1>>;
}

export interface ApiActionsWithPayload<
	T1 extends Params,
	T2 extends Params,
	S1 extends string = string,
	S2 extends string = string,
> {
	failed: ActionCreator<string, (props: ErrorPayload) => ErrorPayload & TypedAction<string>>;
	requested: ActionCreator<S2, (props: T2 & NotAllowedCheck<T2>) => T2 & TypedAction<S2>>;
	succeeded: ActionCreator<S1, (props: T1 & NotAllowedCheck<T1>) => T1 & TypedAction<S1>>;
}

export type LoadingStatus =
	| {
			error: null;
			loaded: false;
			loading: false;
	  }
	| {
			error: null;
			loaded: false;
			loading: true;
	  }
	| {
			error: null;
			loaded: true;
			loading: false;
	  }
	| {
			error: any;
			loaded: false;
			loading: false;
	  };

export interface LoadingStatuses {
	default: LoadingStatus;
	loaded: LoadingStatus;
	loading: LoadingStatus;
}
