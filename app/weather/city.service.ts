import { Injectable } from '@angular/core';
import { City } from './city';
import { CITIES_ITEMS } from './city-data';
import { findIndex } from 'lodash';

@Injectable()
export class CityService {
  private cities = CITIES_ITEMS;

  getCitiesFromData(): City[] {
    console.log(this.cities);
    return this.cities;
  }
}
