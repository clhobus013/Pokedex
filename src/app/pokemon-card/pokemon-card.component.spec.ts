import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from './Pokemon';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  let pokemon:Pokemon;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    pokemon = new Pokemon({
      'national_number':1,
      'sprites':{'normal':'', 'large':'', 'animated':''},
      'name':'',
      'type':['Water', 'Grass'],
      'favorito': false
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should favorite', () =>{

    component.favoritar(pokemon);
    
    expect(pokemon.favorito).toBe(true);
  })

  it('should return #4592C4', () =>{

    expect(component.getBackgroundColor('', 'Water')).toEqual('#4592C4');
  })
});
