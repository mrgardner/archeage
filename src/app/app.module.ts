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
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemTableComponent,
    ItemComponent,
    NavMenuComponent,
    OrderByPipe,
    CalculatorComponent
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
