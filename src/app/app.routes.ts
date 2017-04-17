import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import { SkillCalculatorComponent} from "./skill-calculator/skill-calculator.component";
import {ItemTableComponent} from "./item-table/item-table.component";
import {GearCalculatorComponent} from "./gear-calculator/gear-calculator.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'item', component: ItemTableComponent},
  { path: 'item/:itemId', component: ItemComponent},
  { path: 'skill-calculator', component: SkillCalculatorComponent},
  { path: 'skill-calculator/:buildId', component: SkillCalculatorComponent},
  { path: 'gear-calculator', component: GearCalculatorComponent},
  { path: 'gear-calculator/:BuildId', component: GearCalculatorComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

