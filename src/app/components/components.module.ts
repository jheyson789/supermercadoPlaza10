import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselPromotionsComponent } from './carousel-promotions/carousel-promotions.component';



@NgModule({
  declarations: [
    CarouselPromotionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CarouselPromotionsComponent
  ]
})
export class ComponentsModule { }
