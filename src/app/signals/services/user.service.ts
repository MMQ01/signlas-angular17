import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SingleUserResponse, User } from '../interfaces/user-request.interfaces';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient)
  private baseUrl = 'https://reqres.in/api/users'

  getUserById(id:number):Observable<User>{

    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
    .pipe(
      map((response)=>response.data),
      tap(console.log )
    )
  }



}
