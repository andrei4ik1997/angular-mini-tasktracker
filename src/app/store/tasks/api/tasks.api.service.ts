import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {FIREBASE_API_URL, Task} from '@shared';
import {Observable, map} from 'rxjs';

@Injectable()
export class TasksApiService {
	private readonly httpClient = inject(HttpClient);

	public getTasks(): Observable<Task[]> {
		return this.httpClient
			.get<Record<string, Task>>(`${FIREBASE_API_URL}/tasks.json`)
			.pipe(map((tasks) => Object.values(tasks) ?? []));
	}

	public addTask(payload: Task): Observable<Task> {
		return this.httpClient.put<Task>(`${FIREBASE_API_URL}/tasks/${payload.id}.json`, payload);
	}

	public getTask(taskId: number | null): Observable<Task> {
		return this.httpClient.get<Task>(`${FIREBASE_API_URL}/tasks/${taskId}.json`);
	}

	public changeTaskInfo(taskId: number | null, payload: Partial<Task>): Observable<Partial<Task>> {
		return this.httpClient.patch<Partial<Task>>(`${FIREBASE_API_URL}/tasks/${taskId}.json`, payload);
	}
}
