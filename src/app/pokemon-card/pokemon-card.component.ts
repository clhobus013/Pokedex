import { Component, Input } from '@angular/core';

import { Pokemon } from './Pokemon';

import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input() 
  pokemon: Pokemon;
  faCoffee = faCoffee;
  faHeart = faHeart;

  favOpacity = 0;
  
  constructor() {
  }

  public favoritar(pokemon:Pokemon){
    pokemon.favorito = !pokemon.favorito;
    this.favOpacity = 100;
  }

  public getBackgroundColor(tp:string, typePk:string = '') {
    let type = tp == 'bg' ? this.pokemon.type[0] : typePk
    let color = '';

    if (type == "Grass") {
      color = tp == 'bg' ? '#9BCC5026' : '#9BCC50'
    } else if (type == "Poison") {
      color = tp == 'bg' ? '#B97FC926' :'#B97FC9'
    } else if (type == "Fire") {
      color = tp == 'bg' ? '#FD7D2426' : '#FD7D24'
    } else if (type == "Water") {
      color = tp == 'bg' ? '#4592C426' : '#4592C4'
    } else if (type == "Bug") {
      color = tp == 'bg' ? '#729F3F26' : '#729F3F'
    } else if (type == "Normal") {
      color = tp == 'bg' ? '#A4ACAF26' : '#A4ACAF'
    } else if (type == "Eletric") {
      color = tp == 'bg' ? '#EED53526' : '#EED535'
    } else if (type == "Fairy") {
      color = tp == 'bg' ? '#FDB9E926' : '#FDB9E9'
    } else if (type == "Psychic") {
      color = tp == 'bg' ? '#F366B926' : '#F366B9'
    } else if (type == "Fighting") {
      color = tp == 'bg' ? '#D5672326' : '#D56723'
    } else if (type == "Rock") {
      color = tp == 'bg' ? '#A38C2126' : '#A38C21'
    } else {
      color = tp == 'bg' ? '#A4ACAF26' : '#A4ACAF'
    }
    return color;
  }


}
