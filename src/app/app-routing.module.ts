import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplanteComponent } from './pages/templante/templante.component';

const routes: Routes = [
  {path: 'templante', component: TemplanteComponent},
  {path: 'reactive', component: ReactiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'templante'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
