import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComonService {
  isShowHeader = new BehaviorSubject<any>(false)

  headerStatus = this.isShowHeader.asObservable();

  changeStatusHeader(status: boolean) {
    this.isShowHeader.next(status);
  }
  constructor() { }
}
