import { UserService } from './../../core/service/user-service/user.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { ComonService } from '../../core/service/common-service/comon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isMain = true;
  isLogin = false
  users: any;

  constructor(
    private comonservice: ComonService,
    private userservice: UserService
  ) { }

  ngOnInit(): void {
    this.comonservice.changeStatusHeader(this.isMain);

  }
  ngOnDestroy() {
    this.comonservice.changeStatusHeader(!this.isMain);
  }
}
