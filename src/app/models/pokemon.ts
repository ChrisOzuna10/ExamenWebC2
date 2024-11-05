export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    name: string;
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny?: string;
        back_shiny?: string;
    };
    abilities: { ability: { name: string } }[];
    game_indices: { version: { name: string } }[];
}
