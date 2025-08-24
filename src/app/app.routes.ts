import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
//    {path:'', redirectTo: '/home',pathMatch: 'full'},
 
   {path:'about/:id', component:About},
   {path:'', component:Home},
//    lazy loaading
//    {
//     path: '',
//     loadComponent:() => import('./home/home').then((c)=>c.Home),
        
//    },
//    {
//     path: 'about/:id',
//     loadComponent:() => import('./component/about/about').then((c)=>c.About),
        
//    }


];
