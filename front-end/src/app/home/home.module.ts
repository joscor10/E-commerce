import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductoModule } from '../producto/producto.module';


@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    ProductoModule
  ]
})
export class HomeModule { }
