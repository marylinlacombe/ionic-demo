import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountriesServiceProvider } from '../../providers/countries-service/countries-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  countries:any


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
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
