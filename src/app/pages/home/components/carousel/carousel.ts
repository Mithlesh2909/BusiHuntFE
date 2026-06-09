import { Component, NgZone } from '@angular/core';
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
    'assets/carousel/homescreen1.jpg',
    'assets/carousel/homescreen2.jpg',
    'assets/carousel/homescreen3.jpg'
  ];
  currentIndex = 0;

  intervalId: any;

  ngOnInit() {

    this.startAutoSlide();

  }

  startAutoSlide() {

    this.intervalId = setInterval(() => {

      this.nextImage();

    }, 1000); // ⬅️ 1 second

  }

  nextImage() {

    this.currentIndex = (this.currentIndex + 1) % this.images.length;

  }

  prevImage() {

    this.currentIndex =

      (this.currentIndex - 1 + this.images.length) % this.images.length;

  }

  ngOnDestroy() {

    if (this.intervalId) {

      clearInterval(this.intervalId);

    }

  }
}
