import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* componentes */
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';


/* Modulos */
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent,
    HomeComponent
  ]
})
export class PagesModule { }
