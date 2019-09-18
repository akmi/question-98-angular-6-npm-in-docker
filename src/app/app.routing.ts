import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';

export const AppRoutes: Routes = [
    {
      path: '',
      component: MovieComponent
    }
];
