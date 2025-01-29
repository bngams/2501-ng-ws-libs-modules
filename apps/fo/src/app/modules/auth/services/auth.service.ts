import { Injectable } from "@angular/core";
import { Credentials } from "../models/credentials";
import { Router } from "@angular/router";

const LOCALSTORAGE_ITEM = 'my-app-session'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router) {
    // this.getSession();
  }

  postLogin(credentials: Credentials): void {
    // emulate some login
    console.log('do http request for login', credentials);
    // request done (callback)
    setTimeout(() => {
      // get session or user from
      const sessionData = {userId: 1, validity: '' }; // (from a TOKEN...)
      this.setSession(sessionData);
      // redirect
      this.router.navigateByUrl('/dashboard');
    }, 500);
  }

  // TODO: avoid any
  setSession(session: any) {
    // change login status
    this.isLoggedIn = true;

    // store session
    // with localstorage
    localStorage.setItem(LOCALSTORAGE_ITEM, JSON.stringify(session))
    // TODO: prefer cookies:
    // document.cookie =`my-app-session=${session.token}; SameSite=None; Secure`;
  }

  getSession() {
    const session = localStorage.getItem(LOCALSTORAGE_ITEM);
    this.isLoggedIn = session ? true : false;
  }

  logout() {
    localStorage.removeItem(LOCALSTORAGE_ITEM);
    this.isLoggedIn = false;
  }

}
