import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }
  createUser(data:any) {
    return this.http.post("http://localhost:4000/createUser",data)
  }
}
