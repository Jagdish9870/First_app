import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
//    {path:'', redirectTo: '/home',pathMatch: 'full'},
 
//    {path:'about/:id', component:About},
//    {path:'', component:Home},
//    lazy loading
   {
    path: '',
    loadComponent:() => import('./home/home').then((c)=>c.Home),
        
   },
   {
    path: 'about/:id',
    loadComponent:() => import('./about/about').then((c)=>c.About),
        
   },
   {
    path: 'admin',
    loadComponent:() => import('./admin/admin').then((c)=>c.Admin),
        
   }


];
