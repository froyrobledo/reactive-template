import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplanteComponent } from './pages/templante/templante.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { RouterModule } from '@angular/router';

// import rutaas
import { ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    TemplanteComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FormsModule,
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
