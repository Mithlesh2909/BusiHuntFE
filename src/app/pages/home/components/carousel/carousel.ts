import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {

  images = [
    '/assets/carousel/homescreen1.jpg',
    '/assets/carousel/homescreen2.jpg',
    '/assets/carousel/homescreen3.jpg'
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1)
        % this.images.length;
    }, 3000);
  }
}
