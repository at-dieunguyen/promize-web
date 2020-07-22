import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-singer-product',
  templateUrl: './singer-product.component.html',
  styleUrls: ['./singer-product.component.scss']
})
export class SingerProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }


  slides = [
    {
      img: "./assets/img/thumb-2.jpg",
    },
    {
      img: "./assets/img/thumb-1.jpg",
    },
    {
      img: "./assets/img/thumb-3.jpg",
    },
    {
      img: "./assets/img/thumb-4.jpg",
    }
  ];
  imagesSlider = {
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    centerMode: true,
    fade: true,
    asNavFor: ".thumbs",
    focusOnSelect: true,
  };
  thumbnailsSlider = {
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    infinitie: true,
    asNavFor: ".feedback",
  };
}
