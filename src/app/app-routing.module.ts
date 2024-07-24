import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StoryComponent } from './components/story/story.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title:'Home'
  },
  {
    path:'about',
    component:AboutComponent,
    title:'About'
  },
  {
    path:'story',
    component:StoryComponent,
    title:'Story'
  },
  {
    path:'contact',
    component:ContactComponent,
    title:'Contact'
  },
  {
    path:'enquiry',
    component:EnquiryComponent,
    title:'Enquiry'
  },
  {
    path:'product/:id',
    component:ProductsComponent,
    title:'Products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
