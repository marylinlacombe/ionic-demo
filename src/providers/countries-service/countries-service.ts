import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import de la fonctionnalité des requetes http:
//import { HttpClient } from '@angular/common/http';
//importation pour pouvoir utiliser les promises:
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CountriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountriesServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountriesServiceProvider Provider');
    this.http = http;
  }

   getAllCountries(): Promise<any>{
     return this.http.get('https://restcountries.eu/rest/v2/all').toPromise();
   }


}
