import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {ItemTableComponent} from "./item-table/item-table.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'item', component: ItemTableComponent},
  { path: 'item/:itemId', component: ItemComponent},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'calculator/:buildId', component: CalculatorComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

