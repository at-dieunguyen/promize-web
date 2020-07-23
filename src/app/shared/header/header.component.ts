import { DialogService } from './../../core/dialog.service';
import { Component, OnInit } from '@angular/core';
import { ComonService } from 'src/app/core/comon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalRegister = false;
  modalLogin = false;
  isHome: false;
  constructor(private comonservice: ComonService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.comonservice.headerStatus.subscribe(status => {
      this.isHome = status;
      // console.log(this.isHome);
    })

  }
  showModalRegister() {
    this.dialogService.registerDialog();
  }
  showModalLogin() {
    this.dialogService.loginDialog();
  }

}
