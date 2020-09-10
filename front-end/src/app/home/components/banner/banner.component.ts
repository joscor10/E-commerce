import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['Anterior', 'Siguiente'],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };
  imagenes: string[] = [
    'assets/imagenes/baner1.jpg',
    'assets/imagenes/baner2.jpg',
    'assets/imagenes/baner3.jpg'
  ];

  constructor() { }

  ngOnInit(): void {}


}
