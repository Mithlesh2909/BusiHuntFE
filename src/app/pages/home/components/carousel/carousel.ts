import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel implements OnInit, OnDestroy {

  images: string[] = [
    'assets/carousel/homescreen1.jpg',
    'assets/carousel/homescreen2.jpg',
    'assets/carousel/homescreen3.jpg',
    'assets/carousel/joinTeam.jpg',
    'assets/carousel/meeting1.jpg',
    'assets/carousel/meeting2.jpg',
    'assets/carousel/meeting3.jpg',
    'assets/carousel/meeting4.jpg',

  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}