import { ComonService } from './../../core/comon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isMain = true;
  constructor(
    private comonservice: ComonService,
  ) { }

  ngOnInit(): void {
    this.comonservice.changeStatusHeader(this.isMain);
  }
  ngOnDestroy(){
    this.comonservice.changeStatusHeader(!this.isMain);
  }
}
