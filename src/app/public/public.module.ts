import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    PublicComponent,
    DashboardComponent
  ], 
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    
  ]
})
export class PublicModule { }
