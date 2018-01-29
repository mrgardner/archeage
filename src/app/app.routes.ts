import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import { SkillCalculatorComponent} from "./skill-calculator/skill-calculator.component";
import {ItemTableComponent} from "./item-table/item-table.component";
import {GearCalculatorComponent} from "./gear-calculator/gear-calculator.component";
import {QuestTableComponent} from "./quest-table/quest-table.component";
import {AchievementsComponent} from "./achievements/achievements.component";
import {AchievementsTableComponent} from "./achievements-table/achievements-table.component";
import {RecipeTableComponent} from "./recipe-table/recipe-table.component";
import {SkillsTableComponent} from "./skills-table/skills-table.component";
import {NpcTableComponent} from "./npc-table/npc-table.component";
import {TitleTableComponent} from "./title-table/title-table.component";
import {TitleComponent} from "./title/title.component";
import {NpcComponent} from "./npc/npc.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {SkillsComponent} from "./skills/skills.component";
import {QuestComponent} from "./quest/quest.component";

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
  { path: 'quest/:item1', component: QuestComponent},
  { path: 'quest/:item1/:item2', component: QuestComponent},
  { path: 'quest/:item1/:item2/:item3', component: QuestComponent},
  { path: 'achievements', component: AchievementsTableComponent},
  { path: 'achievements/:item1', component: AchievementsComponent},
  { path: 'achievements/:item1/:item2', component: AchievementsComponent},
  { path: 'achievements/:item1/:item2/:item3', component: AchievementsComponent},
  { path: 'npcs', component: NpcTableComponent},
  { path: 'npcs/:item1', component: NpcComponent},
  { path: 'npcs/:item1/:item2', component: NpcComponent},
  { path: 'npcs/:item1/:item2/:item3', component: NpcComponent},
  { path: 'recipe', component: RecipeTableComponent},
  { path: 'recipe/:item1', component: RecipeComponent},
  { path: 'recipe/:item1/:item2', component: RecipeComponent},
  { path: 'recipe/:item1/:item2/:item3', component: RecipeComponent},
  { path: 'skills', component: SkillsTableComponent},
  { path: 'skills/:item1', component: SkillsComponent},
  { path: 'titles', component: TitleTableComponent},
  { path: 'titles/:item1', component: TitleComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

