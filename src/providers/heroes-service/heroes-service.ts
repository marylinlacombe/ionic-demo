import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HeroesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroesServiceProvider {

  heroes:any;

  constructor(public http: HttpClient) {
    console.log('Hello HeroesServiceProvider Provider');
  }

  //ON CREER LA class  C'est ici qu'il faudrait faire appel à un webservices
  getAllHeroes(forceReload:boolean){
            if(forceReload){
              this.heroes =  [
                    {//DEBUT DU TABLEAU D'OBJET JSON
                            "realname": "Bruce Wayne",
                            "name": "Batman",
                            "cover":"https://www.dccomics.com/sites/default/files/GalleryChar_1920x1080_BM_Cv38_54b5d0d1ada864.04916624.jpg",
                            "editor": "DC",
                            "movies":[
                              {
                                "title": "The Dark Knight Rises",
                                "date": "2012-07-25"
                              },
                              {
                                "title": "The Dark Knight: le chevalier noir",
                                "date": "2008-08-13"
                              },
                              {
                                "title": "Batman Begins",
                                "date": "2005-06-15"
                              }
                            ]
                    },
                    {
                            "realname": "Clack Kent",
                            "name": "Superman",
                            "cover":"https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_MOS_52e05e3fe24a61.04593858.jpg",
                            "editor": "Marvel",
                            "movies":[
                              {
                                "title": "MAN OF STEEL 2",
                                "date": "2016-03-23"
                              },
                              {
                                "title": "Man of steel",
                                "date": "2013-08-13"
                              }
                            ]
                    },
                    {
                            "realname": "Steve Rogers",
                            "name": "Captain America",
                            "cover":"https://www.sideshowtoy.com/wp-content/uploads/2018/02/marvel-captain-america-premium-format-figure-sideshow-feature-300524-1.jpg",
                            "editor": "Marvel",
                            "movies":[
                              {
                                "title": "MAN OF STEEL 2",
                                "date": "2016-03-23"
                              },
                              {
                                "title": "Man of steel",
                                "date": "2013-08-13"
                              }
                            ]
                    }
              ]//FIN DU TABLEAU D'OBJET JSON


            }
  return this.heroes;

        }


}
