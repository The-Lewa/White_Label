import { Component, ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { from } from 'rxjs';

import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [ 
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: HomeComponent }, 
    { path: 'about', component: AboutComponent }, 
    { path: 'services', component: ServicesComponent }, 
    { path: 'works', component: WorksComponent }, 
    { path: 'contact', component: ContactComponent }, 
    { path: '**', component: HomeComponent }, 
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); 