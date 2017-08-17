import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CarComponent} from './car.component';
import {RegisterCustomerComponent} from './registercustomer.component';



@NgModule({
	imports:[BrowserModule,FormsModule,HttpModule],
	declarations:[CarComponent,RegisterCustomerComponent,CarComponent],
	bootstrap:[CarComponent]
})
export class AppModule{

	constructor() {
		console.log("Inside appmodule()");
	}
}

