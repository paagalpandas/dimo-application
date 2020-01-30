import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private token: string;

  public isAuthenticated: Subject<boolean> = new Subject();

  constructor() {
  }

  setToken(token: string) {
    this.token = token;
    this.isAuthenticated.next(true);
  }

  getToken(): string {
    return this.token;
  }

  // isAuthenticated(): boolean {
  //   return this.token == null;
  // }
}
