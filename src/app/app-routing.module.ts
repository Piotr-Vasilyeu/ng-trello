import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
