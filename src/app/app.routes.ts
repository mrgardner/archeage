import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import {CalculatorComponent} from "./calculator/calculator.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'item', component: HomeComponent},
  { path: 'item/:itemId', component: ItemComponent},
  { path: 'calculator', component: CalculatorComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

