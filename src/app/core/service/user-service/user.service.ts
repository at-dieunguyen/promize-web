import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogin = new BehaviorSubject<boolean>(this.local()? true : false);
  currentStatus = this.isLogin.asObservable();
  constructor(

  ) { }
  local() {
    return JSON.parse(localStorage.getItem('currentUser'))
  }
  changeSatusLogin(status: boolean) {
    this.isLogin.next(status);
  }
  user = new BehaviorSubject<any>(this.local()? true: false);
  currentName = this.user.asObservable();
  changeUser(user: any) {
    this.user.next(user);
  }
}
