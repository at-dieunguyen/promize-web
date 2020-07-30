import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  constructor() { }

  product = [
    {
      img: './assets/img/cart-1.png',
      name: 'product 1',
      price: 849,
      quantity: 1,
      total: 849
    },
    {
      img: './assets/img/cart-2.png',
      name: 'product 2',
      price: 949,
      quantity: 1,
      total: 949
    },
    {
      img: './assets/img/cart-3.png',
      name: 'product 3',
      price: 849,
      quantity: 2,
      total: 1698
    }
  ];


  ngOnInit(): void {
    
  }
  slides = [
    {
      img: "./assets/img/product-cart-1.jpg",
      name: 'Sony Speaker',
      price: 18,
      review: 15
    },
    {
      img: "./assets/img/product-cart-2.jpg",
      name: 'American Touris',
      price: 49,
      review: 30
    },
    {
      img: "./assets/img/product-cart-3.jpg",
      name: 'Canon 200D',
      price: 35,
      review: 25
    },
    {
      img: "./assets/img/product-cart-4.jpg",
      name: 'School Bag',
      price: 49,
      review: 30
    },
    {
      img: "./assets/img/product-cart-5.jpg",
      name: 'Stool',
      price: 15,
      review: 10
    },
    {
      img: "./assets/img/product-cart-6.jpg",
      name: 'Watch',
      price: 80,
      review: 28
    }
  ];
  slideConfig = {
    "slidesToShow": 4, "slidesToScroll": 1, "autoplay": true, "infinite": true,
    "autoplaySpeed": 1500,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
    ]
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
