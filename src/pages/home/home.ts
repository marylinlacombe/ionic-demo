import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//IMPORT DE LA CLASSE HEROES SEVICE
import { HeroesServiceProvider } from '../../providers/heroes-service/heroes-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  editorFilter:string = "DC"
  heroes:any;

  //il faut injecter notre class
  constructor(public navCtrl: NavController, public heroesService:HeroesServiceProvider) {

  }
  //est a appellé lorsque la vue est terminée de se charger
  ionViewDidLoad(){
      this.initHeroes();
  }

  initHeroes(){
    this.heroes = this.heroesService.getAllHeroes(true);
  }
}
