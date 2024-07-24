import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { SliderComponent } from './components/partial/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StoryComponent } from './components/story/story.component';
import { FooterComponent } from './components/partial/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    AboutComponent,
    StoryComponent,
    FooterComponent,
    ProductsComponent,
    EnquiryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
