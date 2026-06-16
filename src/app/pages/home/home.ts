import { Component } from '@angular/core';

// Import all standalone child components
import { Header } from './components/header/header';
import { Carousel } from './components/carousel/carousel';
import { Landingpage } from './components/landingpage/landingpage';
import { WhoWeAre } from './components/who-we-are/who-we-are';
import { AboutDirector } from './components/about-director/about-director';
import { Chapter } from './components/chapter/chapter';
import { ChennaiChapter } from './components/chennai-chapter/chennai-chapter';
import { Team } from './components/team/team';
import { ClubEvents } from './components/club-events/club-events';
import { JoinUs } from './components/join-us/join-us';
import { Gallery } from './components/gallery/gallery';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    Carousel,
    Landingpage,
    WhoWeAre,
    AboutDirector,
    Chapter,
    ChennaiChapter,
    Team,
    ClubEvents,
    JoinUs,
    Gallery,
    Footer
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
