import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { DialogService } from 'src/app/core/service/dialog-service/dialog.service';

export interface User {
  firstname: string,
  email: string, 
  password: string
}

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss']
})
export class DialogRegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup;

  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogService: DialogService,

  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }
      , {
        validators: this.matchPasswords
      }
    )
  }
  matchPasswords(group: FormGroup) {
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : { notSame: true }
  }
  reg() {
    this.user = {
      firstname: this.registerForm.value.firstName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    console.log(this.user);
    this.db.list('user').push(this.user);
    alert('Your account has been successfully registered');
    this.dialogRef.close('no')
    this.dialogService.loginDialog();
  }

  close() {
    this.dialogRef.close('no')
  }
}
