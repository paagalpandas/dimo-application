import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private token: string;

  constructor() {
  }

  setToken(token: string) {
    console.log("setting token - " + token);
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token == null;
  }
}
