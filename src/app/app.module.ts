import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ArcheageDatabaseService} from "./services/database.service";
import { HomeComponent } from './home/home.component';
import { ItemTableComponent } from './item-table/item-table.component';
import {PagerService} from "./services/pager.service";
import { ItemComponent } from './item/item.component';
import {routing} from "./app.routes";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {OrderByPipe} from "./item-table/item-table.pipe";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
<<<<<<< 1eff5b507727b2b748eba5bf15264dbdebcd905b
import { SkillCalculatorComponent } from './skill-calculator/skill-calculator.component';
import { GearCalculatorComponent } from './gear-calculator/gear-calculator.component';
=======
import { CalculatorComponent } from './calculator/calculator.component';
import { QuestTableComponent } from './quest-table/quest-table.component';
import { QuestComponent } from './quest/quest.component';
import { AchievementsTableComponent } from './achievements-table/achievements-table.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { NpcTableComponent } from './npc-table/npc-table.component';
import { NpcComponent } from './npc/npc.component';
import { RecipeTableComponent } from './recipe-table/recipe-table.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SkillsTableComponent } from './skills-table/skills-table.component';
import { SkillsComponent } from './skills/skills.component';
import { TitleTableComponent } from './title-table/title-table.component';
import { TitleComponent } from './title/title.component';
>>>>>>> Saving work for add database

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemTableComponent,
    ItemComponent,
    NavMenuComponent,
    OrderByPipe,
<<<<<<< 1eff5b507727b2b748eba5bf15264dbdebcd905b
    SkillCalculatorComponent,
    GearCalculatorComponent
=======
    CalculatorComponent,
    QuestTableComponent,
    QuestComponent,
    AchievementsTableComponent,
    AchievementsComponent,
    NpcTableComponent,
    NpcComponent,
    RecipeTableComponent,
    RecipeComponent,
    SkillsTableComponent,
    SkillsComponent,
    TitleTableComponent,
    TitleComponent
>>>>>>> Saving work for add database
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

  ],
  providers: [ArcheageDatabaseService, PagerService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
