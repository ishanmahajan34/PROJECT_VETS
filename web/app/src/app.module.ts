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
import {CricketComponent} from "./cricket.component";
import {SelectedCarComponent} from "./viewcardetails.component";
import {SellCarComponent} from "./sell.component";
import {ReturningCustomerComponent} from "./oldcustomer.component";
// import {AddCustomerCarComponent} from "./addcustomercar.component";



@NgModule({
    imports:[BrowserModule,FormsModule,HttpModule,configuredRoutes],
	declarations:[RegisterCustomerComponent,ReturningCustomerComponent,SellCarComponent,CricketComponent,SelectedCarComponent,CarComponent,AppComponent,HomeComponent,CarSearchComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

	constructor() {
		console.log("Inside appmodule()");
	}
}

