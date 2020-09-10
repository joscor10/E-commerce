import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './componnents/header/header.component';
import { FooterComponent } from './componnents/footer/footer.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
