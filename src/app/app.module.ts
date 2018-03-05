// make the following changes to app.module.ts:

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';       // without above 2 import, html will be blank

import { FormsModule } from '@angular/forms';   // 2 way data binding

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './data.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

const appRoutes: Routes = [
  
{

path: 'about/:id',

component: AboutComponent

},

{

path: '',

component: HomeComponent

}

];

@NgModule({

declarations: [

AppComponent,

AboutComponent,

HomeComponent

],

imports: [

BrowserModule,

FormsModule,             // 2 way data binding

BrowserAnimationsModule,

RouterModule.forRoot(appRoutes)

],

providers: [DataService],

bootstrap: [AppComponent]

})

export class AppModule { }