import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { CityComponent } from './weather/city.component';
import { NavbarComponent } from './nav/nav.component';

import { CityService } from './weather/city.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, CityComponent, NavbarComponent ],
  providers: [ CityService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
