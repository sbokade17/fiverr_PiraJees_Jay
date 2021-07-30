import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { ReachOutComponent } from './pages/reach-out/reach-out.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    HomeComponent,
    SiteFooterComponent,
    CakesComponent,
    ReachOutComponent,
    AboutComponent,
    ContactComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
