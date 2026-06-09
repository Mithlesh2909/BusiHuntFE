import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { WhoWeAre } from './pages/home/components/who-we-are/who-we-are';
import { Team } from './pages/home/components/team/team';
import { Gallery } from './pages/home/components/gallery/gallery';
import { Chapter } from './pages/home/components/chapter/chapter';
import { Landingpage } from './pages/home/components/landingpage/landingpage';

export const routes: Routes = [
   {
    path: 'home',
    component: Home,
    children: [
      { path: 'landing-page', component: Landingpage },
      { path: 'who-we-are', component: WhoWeAre },
      { path: 'find-chapter', component: Chapter },
      { path: 'team', component: Team },
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
