import { Routes } from '@angular/router';
import { Courses } from './pages/courses/courses';

export const routes: Routes = [
//    {path:'', redirectTo: '/home',pathMatch: 'full'},
 
//    {path:'about/:id', component:About},
//    {path:'', component:Home},
//    lazy loading
   {
    path: '',
    loadComponent:() => import('./pages/home/home').then((c)=>c.Home),
        
   },
   {
    path: 'about',
    loadComponent:() => import('./pages/about/about').then((c)=>c.About),
        
   },
   {
    path: 'admin',
    loadComponent:() => import('./pages/admin/admin').then((c)=>c.Admin),
        
   },
   {
    path: 'course',
    loadComponent:() => import('./pages/courses/courses').then((c)=>c.Courses),
        
   },


];
