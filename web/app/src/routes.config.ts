import { Routes,RouterModule } from '@angular/router';

import {CarComponent} from './car.component';

import {HomeComponent} from "./home.component";
import {CarSearchComponent} from "./carsearch.component";

import {RegisterCustomerComponent} from "./registercustomer.component";
import {CricketComponent} from "./cricket.component";
import {SelectedCarComponent} from "./viewcardetails.component";
import {SellCarComponent} from "./sell.component";
import {ReturningCustomerComponent} from "./oldcustomer.component";

let routes:Routes = [
    {path:'add',component:CarComponent},
    {path:'carlist',component:CarSearchComponent},
    {path:'home',component:HomeComponent},
    {path:'viewSelectedCar/:id',component:SelectedCarComponent},
    {path:'cricket',component:CricketComponent},
    {path:'sellCar',component:SellCarComponent},
    {path:'emailFind/:username',component:ReturningCustomerComponent},
    {path:'register',component:RegisterCustomerComponent},
    // {path:'movie/:mid',component:MovieComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
];

export const configuredRoutes = RouterModule.forRoot(routes);