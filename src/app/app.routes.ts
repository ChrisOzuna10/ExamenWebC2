import { Routes } from '@angular/router';
import { PokemonDetailsComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './module/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: "home", component: HomeComponent},
  { path: 'pokemon/:name', component: PokemonDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];
