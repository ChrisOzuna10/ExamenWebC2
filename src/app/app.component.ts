import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";
import { PokemonDetailsComponent } from "./components/pokemon-detail/pokemon-detail.component";
import { PokemonService } from './services/pokemon.service';
import { PokemonDetails } from './models/pokemon';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageNotFoundComponent, PokemonListComponent, PokemonDetailsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemons: PokemonDetails[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    
  }
}
