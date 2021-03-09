import { Component, ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { from } from 'rxjs';

import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialComponent } from './components/social/social.component';
import { DevelopmentComponent } from './components/development/development.component';
import { BackOfficeComponent } from './components/back-office/back-office.component';
import { GraphicDesignComponent } from './components/graphic-design/graphic-design.component';
import { PhotoVideoComponent } from './components/photo-video/photo-video.component';
import { WebsiteComponent } from './components/website/website.component';
import { WcagComponent } from './components/wcag/wcag.component';
import { InsightsComponent } from './components/insights/insights.component';


const appRoutes: Routes = [ 
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: HomeComponent }, 
    { path: 'about', component: AboutComponent }, 
    { path: 'services', component: ServicesComponent }, 
    { path: 'works', component: WorksComponent }, 
    { path: 'contact', component: ContactComponent }, 
    { path: 'socialMedia', component: SocialComponent }, 
    { path: 'development', component: DevelopmentComponent }, 
    { path: 'backOffice', component: BackOfficeComponent }, 
    { path: 'graphicDesing', component: GraphicDesignComponent }, 
    { path: 'photoVideo', component: PhotoVideoComponent }, 
    { path: 'website', component: WebsiteComponent }, 
    { path: 'wcag', component: WcagComponent }, 
    { path: 'insights', component: InsightsComponent }, 
    { path: '**', component: HomeComponent }, 
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); 