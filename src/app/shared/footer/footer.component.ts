import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  slides = [
    { img: "./assets/img/slider1.png" },
    { img: "./assets/img/slider2.png" },
    { img: "./assets/img/slider3.png" },
    { img: "./assets/img/slider4.png" },
    { img: "./assets/img/slider5.png" },
    { img: "./assets/img/slider6.png" },
    { img: "./assets/img/slider7.png" },
    { img: "./assets/img/slider8.png" },
    { img: "./assets/img/slider9.png" },

  ];
  slideConfig = {
    "slidesToShow": 6, "slidesToScroll": 1, "autoplay": true, "infinite": true,
    "autoplaySpeed": 1500
  };

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
