import { UserService } from './../../core/service/user-service/user.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent implements OnInit {

  loginForm: FormGroup;
  users: any;
  notification = 0;
  loginTrue = false;
  isLogin = false;
  currentEmail: any;

  constructor(
    private dialogRef: MatDialogRef<DialogLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private userservice: UserService
  ) {
    this.db.list('user').valueChanges().subscribe(data => {
      this.users = data
    })
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  login() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.loginForm.value.email && this.users[i].password === this.loginForm.value.password) {
        this.loginTrue = true;
        break;
      }
      else {
        this.loginTrue = false
      }
    }
    if (this.loginTrue === true) {
      this.notification = 0;
      localStorage.setItem('currentUser', JSON.stringify(this.loginForm.value));
      //change status when login success
      let status = true;
      this.userservice.changeSatusLogin(status);
      this.dialogRef.close('no');

      //get name current user
      this.currentEmail = JSON.parse(localStorage.getItem('currentUser'))
      this.userservice.changeUser(this.currentEmail)
      console.log(this.currentEmail);
      
    }
    else {
      this.notification = -1;

    }
  }


  close() {
    this.dialogRef.close('no');
  }

}
