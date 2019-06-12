import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  
  { path:'Home', component: HeaderComponent},
  { path: 'About', component: IntroductionComponent },
  { path: 'Services', component: ContentComponent  },
  { path: 'Testimonials', component: TestimonialComponent  },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Clients', component:  ClientsComponent  },
  { path: 'Pricing', component: PricingComponent },
];
 
  

@NgModule({
  imports: [CommonModule,  RouterModule.forRoot(routes,{ enableTracing: true } )],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
