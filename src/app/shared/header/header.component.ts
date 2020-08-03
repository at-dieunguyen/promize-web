import { UserService } from './../../core/service/user-service/user.service';
import { DialogService } from '../../core/service/dialog-service/dialog.service';
import { Component, OnInit } from '@angular/core';
import { ComonService } from 'src/app/core/service/common-service/comon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalRegister = false;
  modalLogin = false;
  isHome: false;
  isLogin: boolean;
  currentEmail: any;
  currentData: any;

  constructor(
    private comonservice: ComonService,
    private dialogService: DialogService,
    private userservice: UserService

  ) { }

  ngOnInit(): void {
    this.comonservice.headerStatus.subscribe(status => {
      this.isHome = status;
    })

    this.userservice.currentStatus.subscribe(e => {
      this.isLogin = e

    })
    // subscribe change email when login      
    this.userservice.currentName.subscribe(e => {
      this.currentData = e
      console.log(this.currentData);
      this.currentEmail = JSON.parse(localStorage.getItem('currentUser'))
      console.log(this.currentEmail);
      
    })

  }
  showModalRegister() {
    this.dialogService.registerDialog();
  }
  showModalLogin() {
    this.dialogService.loginDialog();
  }

  logOut() {
    let status = false;
    this.userservice.changeSatusLogin(status);
    localStorage.removeItem('currentUser');
  }
}
