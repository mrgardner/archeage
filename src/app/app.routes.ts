import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import { SkillCalculatorComponent} from "./skill-calculator/skill-calculator.component";
import {ItemTableComponent} from "./item-table/item-table.component";
<<<<<<< 1eff5b507727b2b748eba5bf15264dbdebcd905b
import {GearCalculatorComponent} from "./gear-calculator/gear-calculator.component";
=======
import {QuestTableComponent} from "./quest-table/quest-table.component";
import {AchievementsComponent} from "./achievements/achievements.component";
import {AchievementsTableComponent} from "./achievements-table/achievements-table.component";
import {RecipeTableComponent} from "./recipe-table/recipe-table.component";
import {SkillsTableComponent} from "./skills-table/skills-table.component";
import {NpcTableComponent} from "./npc-table/npc-table.component";
import {TitleTableComponent} from "./title-table/title-table.component";
>>>>>>> Saving work for add database

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'item', component: ItemTableComponent},
  { path: 'skill-calculator', component: SkillCalculatorComponent},
  { path: 'skill-calculator/:buildId', component: SkillCalculatorComponent},
  { path: 'gear-calculator', component: GearCalculatorComponent},
  { path: 'gear-calculator/:BuildId', component: GearCalculatorComponent},
  { path: 'item/:item1', component: ItemTableComponent},
  { path: 'item/:item1/:item2', component: ItemTableComponent},
  { path: 'item/:item1/:item2/:item3', component: ItemTableComponent},
  { path: 'info/item/:itemId', component: ItemComponent},
  { path: 'quest', component: QuestTableComponent},
  { path: 'quest/:item1', component: QuestTableComponent},
  { path: 'quest/:item1/:item2', component: QuestTableComponent},
  { path: 'quest/:item1/:item2/:item3', component: QuestTableComponent},
  { path: 'achievements', component: AchievementsTableComponent},
  { path: 'achievements/:item1', component: AchievementsTableComponent},
  { path: 'achievements/:item1/:item2', component: AchievementsTableComponent},
  { path: 'achievements/:item1/:item2/:item3', component: AchievementsTableComponent},
  { path: 'npcs', component: NpcTableComponent},
  { path: 'npcs/:item1', component: NpcTableComponent},
  { path: 'npcs/:item1/:item2', component: NpcTableComponent},
  { path: 'npcs/:item1/:item2/:item3', component: NpcTableComponent},
  { path: 'recipe', component: RecipeTableComponent},
  { path: 'recipe/:item1', component: RecipeTableComponent},
  { path: 'recipe/:item1/:item2', component: RecipeTableComponent},
  { path: 'recipe/:item1/:item2/:item3', component: RecipeTableComponent},
  { path: 'skills', component: SkillsTableComponent},
  { path: 'skills/:item1', component: SkillsTableComponent},
  { path: 'skills/:item1/:item2', component: SkillsTableComponent},
  { path: 'skills/:item1/:item2/:item3', component: SkillsTableComponent},
  { path: 'titles', component: TitleTableComponent},
  { path: 'titles/:item1', component: TitleTableComponent},
  { path: 'titles/:item1/:item2', component: TitleTableComponent},
  { path: 'titles/:item1/:item2/:item3', component: TitleTableComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

