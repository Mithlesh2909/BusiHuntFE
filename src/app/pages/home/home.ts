import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Carousel } from './components/carousel/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    Carousel
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
