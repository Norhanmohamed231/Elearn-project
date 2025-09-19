import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  user = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {}

  addUser(model: any, type: any) {
    return this.http.post('http://localhost:3000/' + type, model);
  }

  updateData(id: any, model: any, type: any) {
    return this.http.put('http://localhost:3000/' + type + '/' + id, model);
  }

  login(model: any) {
    return this.http.put('http://localhost:3000/login/1', model);
  }

  getUsers(type: string) {
    return this.http.get('http://localhost:3000/' + type);
  }

  getLogin() {
    return this.http.get('http://localhost:3000/login/1');
  }
}
