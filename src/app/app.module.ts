import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CargarScriptsService } from "./cargar-scripts.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { routing} from '../app/app.routing';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WorksComponent,
    ContactComponent,
    SocialComponent,
    DevelopmentComponent,
    BackOfficeComponent,
    GraphicDesignComponent,
    PhotoVideoComponent,
    WebsiteComponent,
    WcagComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
