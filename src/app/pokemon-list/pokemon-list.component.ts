import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';

import {  faMagnifyingGlass, faDeleteLeft, faHeart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { Pokemon } from '../pokemon-card/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  pokemons : Pokemon[] = [];
  orderBy: string = "0";
  searchBy: string = "";

  showTypes: boolean = true;

  types: string[] = [];

  faMagnifyingGlass = faMagnifyingGlass;
  faDeleteLeft = faDeleteLeft;
  faPlus  = faPlus;
  faMinus = faMinus;
  faHeart = faHeart;

  constructor(private http: HttpClient, private e: ElementRef, private renderer: Renderer2) {    
    this.getPokemons();
  }

  getPokemons() {
    this.http.get<any>('https://unpkg.com/pokemons@1.1.0/pokemons.json')
    .subscribe(
    ret => {

      ret.results.forEach( (pokemon:any) => {        
        this.pokemons.push(new Pokemon(pokemon));

        pokemon.type.forEach((type:string) =>{
          if(this.types.indexOf(type) < 0 ){
            this.types.push(type);
          }
        })
      });
    })
  }

  public ordenar(){

    if (this.orderBy == "1"){
      //Ascendente Nome
      this.pokemons.sort((a:any, b:any) => a.name.localeCompare(b.name));
      
    } else if (this.orderBy == "2") {
      //Descendente nome
      this.pokemons.sort((a:any, b:any) => b.name.localeCompare(a.name));
      
    } else if (this.orderBy == "3") {
      //Ascendente national number
      this.pokemons.sort((a:any, b:any) => parseFloat(a.national_number) - parseFloat(b.national_number));
      
    } else {
        //Descendente national number 
        this.pokemons.sort((a:any, b:any) => parseFloat(b.national_number) - parseFloat(a.national_number));
        
    }
    return 
  }

  public filterBy(){
    
    if(this.pokemons.length === 0 || this.pokemons === undefined){
      return this.pokemons;
    }

    return this.pokemons.filter((p) => {

        let qtdCar = this.searchBy.length;

        if (this.searchBy == "favoritos"){
          return p.favorito ? true : false;
        } else if(p.name.substring(0, qtdCar).toUpperCase() == this.searchBy.toUpperCase() ||
           p.national_number == parseInt(this.searchBy)){
          return true;
        }else{

          let achou = false;

          p.type.forEach((type:string) => {
            if(type == this.searchBy){
              achou = true;
            }
          })

          if (achou){
            return true;
          } else {
            return false;
          }
        }

    });
  }

  public showMoreTypes(index:number, ){

    if(index >= 4 && this.showTypes){
      return 'none';
    } else {
      return 'block';
    } 

  }

  public expandTypes(){
    this.showTypes = this.showTypes ? false : true;

    for(let i=0; i<this.types.length; i++){
      if (this.showTypes){
        this.renderer.removeStyle(this.e.nativeElement.querySelector('#typebtn' + i.toString()),"display")
      } else if(i<=5) {
        this.renderer.setStyle(this.e.nativeElement.querySelector('#typebtn' + i.toString()),"display", 'none')
      }
    }
  }

  public getBackgroundColor(type:string) {
    let color = 'orange';
    if (type == "Grass") {
      color = '#9BCC50'
    } else if (type == "Poison") {
      color = '#B97FC9'
    } else if (type == "Fire") {
      color = '#FD7D24'
    } else if (type == "Water") {
      color = '#4592C4'
    } else if (type == "Bug") {
      color = '#729F3F'
    } else if (type == "Normal") {
      color = '#A4ACAF'
    } else if (type == "Eletric") {
      color = '#EED535'
    } else if (type == "Fairy") {
      color = '#FDB9E9'
    } else if (type == "Psychic") {
      color = '#F366B9'
    } else if (type == "Fighting") {
      color = '#D56723'
    } else if (type == "Rock") {
      color = '#A38C21'
    } else {
        color = '#A4ACAF';
      }
    return color;
  }

}
