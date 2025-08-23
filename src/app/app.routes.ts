import { Routes } from '@angular/router';
import { About } from './component/about/about';
import { Home } from './home/home';

export const routes: Routes = [
//    {path:'', redirectTo: '/home',pathMatch: 'full'},
 
   {path:'about', component:About},
   {path:'', component:Home}
];
