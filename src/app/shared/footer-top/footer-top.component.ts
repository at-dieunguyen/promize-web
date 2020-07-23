import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss']
})
export class FooterTopComponent implements OnInit {

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
    "autoplaySpeed": 1500,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  slickInit(e) {
    // console.log('slick initialized');
  }

  breakpoint(e) {
    // console.log('breakpoint');
  }

  afterChange(e) {
    // console.log('afterChange');
  }

  beforeChange(e) {
    // console.log('beforeChange');
  }
}
