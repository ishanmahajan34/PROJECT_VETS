import {Component} from "@angular/core";

@Component({
	selector:'myApp',
    template:`<div>
        <h1>{{title}}</h1>
        <a routerLink="sellCar">SELL YOUR CAR</a>
		<a routerLink="add">Add Car</a>
        <a routerLink="carlist">Find Cars</a>
        <a routerLink="cricket">Cricket Page</a>
        <a routerLink="viewSelectedCar">DISPLAY CAR!!</a>
		<br/>
		<!--<a routerLink="addcarforcustomer">add customer car</a>-->
		<br />
       	<router-outlet></router-outlet>      
    </div>`
})
export class AppComponent{

	title:string ="CAR EXCHANGE PORTAL";

}
