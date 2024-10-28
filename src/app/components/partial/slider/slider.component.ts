import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
  ngOnInit() {
    // Initialize carousel with options
    const myCarousel = document.getElementById('carouselExampleCaptions')
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 4000,
      wrap: true,
      pause: false // This prevents pausing on hover
    });
  }
}
