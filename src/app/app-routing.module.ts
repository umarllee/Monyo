import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './public/components/dashboard/dashboard.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  {
    path: 'main', component: PublicComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
