import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Todo } from '../interfaces/Todo';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'any',
})
export class TodoService {
  private url = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return throwError(
          () =>
            new Error('Something bad happened; please try again later.')
        );
      })
    );
  }

  updateTodos(todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;
    return this.http.patch<Todo>(url, todo, httpOptions);
  }

  deleteTodos(id: number): Observable<Todo> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Todo>(url);
  }

  addTodos(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo, httpOptions);
  }
}
