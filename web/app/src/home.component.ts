import {Component} from "@angular/core";

@Component({
    selector:'home',
    // template:'<div><h1>{{title}}</h1><h2>{{summary}}</h2></div>'
    templateUrl: '../partials/home.html',
    styleUrls:['../css/global.css','../css/w3.css','../css/searchcar.styles.css','../css/bootstrap.min.css','../css/oswald.css'],
})
export class HomeComponent{

    title:string ="Home Page";
    summary:string ="Welcome to Home Page";
}
