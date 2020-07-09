import { Component, OnInit } from '@angular/core';
import { ComonService } from 'src/app/core/comon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHome: false;
  constructor(private comonservice: ComonService,) { }

  ngOnInit(): void {
    this.comonservice.headerStatus.subscribe(status => {
      this.isHome = status;
      console.log(this.isHome);
      
    })
  }

}
