import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';

import {  MaterialModule} from '../material/material.module';
@NgModule({
  declarations: [ProductoItemComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule
  ],
  exports: [ProductoItemComponent]
})
export class ProductoModule { }
