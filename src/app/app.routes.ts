import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { WhoWeAre } from './pages/home/components/who-we-are/who-we-are';
import { AboutDirector } from './pages/home/components/about-director/about-director';
import { Team } from './pages/home/components/team/team';
import {  ClubEvents} from './pages/home/components/club-events/club-events';
import {  JoinUs} from './pages/home/components/join-us/join-us';
import { Gallery } from './pages/home/components/gallery/gallery';
import { Chapter } from './pages/home/components/chapter/chapter';
import { ChennaiChapter } from './pages/home/components/chennai-chapter/chennai-chapter';
import { Landingpage } from './pages/home/components/landingpage/landingpage';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
    children: [
      { path: 'landing-page', component: Landingpage },
      { path: 'who-we-are', component: WhoWeAre },
      { path: 'about-director', component: AboutDirector },
      { path: 'puducherry-chapter', component: Chapter },
      { path: 'chennai-chapter', component: ChennaiChapter },
      { path: 'team', component: Team },
      { path: 'club-events', component: ClubEvents },
      { path: 'join-us', component: JoinUs },
      { path: 'gallery', component: Gallery }
    ]
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'signup',
    component: Signup
  },

  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  }
];
