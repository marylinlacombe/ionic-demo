import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountriesServiceProvider } from '../../providers/countries-service/countries-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  countries:any;
  filteredCountries:any;

  constructor(public navCtrl: NavController, public countriesService:CountriesServiceProvider) {

  }

  ionViewDidLoad(){
      this.initCountries();

  }

  initCountries(){
    this.countriesService.getAllCountries()
    .then((res) =>{
      console.log(res);
      this.countries = res
      this.filterCountries('');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  filterCountriesEvent(ev:any){

    // récupération de la valeur de la searchbar
    let searchTerm = ev.target.value;
    this.filterCountries(searchTerm);


  }
  filterCountries(searchTerm:string ){
    //reset de countries pour retrouver la liste originale
    this.filteredCountries = this.countries;
    // ne filtre pas si rien dans la search
    if (searchTerm && searchTerm.trim() != '') {
      this.filteredCountries = this.filteredCountries.filter((countrie) => {
        return (countrie.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      })
    }
  }
}
