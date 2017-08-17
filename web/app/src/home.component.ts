import {Component} from "@angular/core";

@Component({
    selector:'home',
    template:'<div><h1>{{title}}</h1><h2>{{summary}}</h2></div>'
})
export class HomeComponent{

    title:string ="Home Page";
    summary:string ="Welcome to Home Page";
}
