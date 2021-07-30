import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { ReachOutComponent } from './pages/reach-out/reach-out.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
//import { AuthGuard } from "./utility/auth.gaurds";

// const routes: Routes = [];
const routes: Routes = [

  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        data: { title: "MyHome" }
      },
      {
        path: "home",
        component: HomeComponent,
        data: { title: "MyHome" }
      },
      {
        path: "Cakes",
        component: CakesComponent,
        data: { title: "Cakes" }
      },
      {
        path: "Reach-out",
        component: ReachOutComponent,
        data: { title: "Reach" }
      },
      {
        path: "About",
        component: AboutComponent,
        data: { title: "About" }
      },
      {
        path: "Contact",
        component: ContactComponent,
        data: { title: "Contact" }
      },
    ]
 
    },
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
