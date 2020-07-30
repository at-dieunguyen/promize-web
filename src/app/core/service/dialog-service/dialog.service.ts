import { DialogRegisterComponent } from '../../../shared/dialog-register/dialog-register.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogLoginComponent } from '../../../shared/dialog-login/dialog-login.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public data: any;
  defaultConfigLogin = new MatDialogConfig();
  defaultConfigRegister = new MatDialogConfig();
  constructor(
    private dialog: MatDialog
  ) {
    //defaultConfigLogin
    this.defaultConfigLogin.disableClose = true;
    this.defaultConfigLogin.width = '450px';
    this.defaultConfigLogin.height = '415px';
    //defaultConfigRegister
    this.defaultConfigRegister.disableClose = true;
    this.defaultConfigRegister.width = '500px';
    this.defaultConfigRegister.height = '590px';
  }
  loginDialog(options?: any) {
    // this.defaultConfig.data = {
    //   message: options && options.message ? options.message  : 'confirm.delete'
    // };
    return this.dialog.open(DialogLoginComponent, this.defaultConfigLogin);
  }

  registerDialog() {
    return this.dialog.open(DialogRegisterComponent, this.defaultConfigRegister)
  }
}
