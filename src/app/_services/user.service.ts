import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import {config} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`localhost/users`);
  }

  getById(id: number) {
    return this.http.get(`localhost/users`);
  }

  register(user: User) {
    return this.http.post(`localhost/users`, user);
  }

  update(user: User) {
    return this.http.put(`localhost/users`, user);
  }

  delete(id: number) {
    return this.http.delete(`localhost/users`);
  }
}
