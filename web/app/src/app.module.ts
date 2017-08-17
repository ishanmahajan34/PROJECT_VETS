import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {configuredRoutes} from './routes.config';


import {CarComponent} from './car.component';
import {RegisterCustomerComponent} from './registercustomer.component';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";
import {CarSearchComponent} from "./carsearch.component";



@NgModule({
    imports:[BrowserModule,FormsModule,HttpModule,configuredRoutes],
	declarations:[RegisterCustomerComponent,CarComponent,AppComponent,HomeComponent,CarSearchComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

	constructor() {
		console.log("Inside appmodule()");
	}
}

