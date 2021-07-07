import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplanteComponent } from './pages/templante/templante.component';


export const ROUTES: Routes = [
  {
    path: 'reactive',
    component: ReactiveComponent,
  },
  {
    path: 'search',
    component: TemplanteComponent,
  },
  
//   {path: '', pathMatch: 'full', redirectTo: 'home'},
//   {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
