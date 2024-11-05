import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PokemonService } from '../../services/pokemon.service';
import { ReplaceLettersPipe } from '../../pipes/replace-letters.pipe';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, ReplaceLettersPipe, MatIconModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  favorites: Set<string> = new Set();
  displayedColumns: string[] = ['name', 'favorite'];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((data: Pokemon[]) => {
      this.pokemons = data;
    });
  }

  toggleFavorite(name: string): void {
    this.favorites.has(name) ? this.favorites.delete(name) : this.favorites.add(name);
  }

  goToDetails(name: string): void {
    this.router.navigate(['/pokemon', name]);
  }
}
