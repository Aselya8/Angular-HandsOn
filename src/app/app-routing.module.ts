import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//imports for home, about, albums component
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { AlbumsComponent } from './modules/albums/components/albums/albums.component';


//added const routes with path --> home, about, albums
const routes: Routes = [
  {
    path: 'home',  
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule], 
  declarations: []
})

//added export for  AppRoutingModule
export class AppRoutingModule { }