import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { CityService } from './city.service';
import { City } from './city';
import { clone } from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
    moduleId: module.id,
    templateUrl: 'city.template.html'
})

@Injectable()
export class CityComponent implements OnInit {
  cities: City[];
  weather:{};
  public http:Http;

  constructor(private _cityService: CityService, http:Http) {
    this.http=http;
  }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cities = this._cityService.getCitiesFromData();
  }

  change(selectedValue:string){
    let cityId = selectedValue.split(": ")[1];

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    var url = "http://api.openweathermap.org/data/2.5/weather?appid=f9fb6ac73b084600eb63e2a0da32422b&units=metric&id=" + cityId;


    this.http.get(url).subscribe((data: Response) => {
      data = JSON.parse(data['_body']);
      this.weather = data;
    });

    console.log(this.weather);
  }
}
