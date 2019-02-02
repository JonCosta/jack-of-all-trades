import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/wish-list', pathMatch: 'full'},
  { 
    path: 'wish-list', 
    loadChildren: './wish-list/wish-list.module#WishListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
