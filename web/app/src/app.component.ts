import {Component} from "@angular/core";

@Component({
	selector:'myApp',
    template:`<div>
        <h1>{{title}}</h1>
        <a routerLink="register">Add Customer</a>
		<a routerLink="add">Add Car</a>
        <a routerLink="carlist">Find Cars</a>
		<br/>
		<a routerLink="carlist"><img src="/images/BMW-X6.png"/></a>
		<br />
       	<router-outlet></router-outlet>      
    </div>`
})
export class AppComponent{

	title:string ="CAR EXCHANGE PORTAL";

}
