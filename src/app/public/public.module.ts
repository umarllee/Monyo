import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@NgModule({
  declarations: [
    PublicComponent,
    DashboardComponent
  ], 
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MdbCarouselModule
    
  ]
})
export class PublicModule { }
