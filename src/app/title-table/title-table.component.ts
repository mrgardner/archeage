import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ArcheageDatabaseService} from "../services/database.service";
import {PagerService} from "../services/pager.service";

@Component({
  selector: 'app-title-table',
  templateUrl: './title-table.component.html',
  styleUrls: ['./title-table.component.css']
})
export class TitleTableComponent implements OnInit {
  private sortColumns: any;
  private titlesNames: Object[];
  private titles: Array<Object>;
  private columns: Array<Object>;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private _database: ArcheageDatabaseService, private _pagerService: PagerService, private router: Router, private route: ActivatedRoute) {
    let that = this;
    that.columns = [
      {
        name: 'ID',
        className: 'title-id',
        id: 'id'
      },
      {
        name: 'Icon',
        className: 'title-icon',
        id: ''
      },
      {
        name: 'Title',
        className: 'title-name',
        id: 'name'
      },
      {
        name: 'Boosts',
        className: 'title-description',
        id: 'description'
      }
    ];

    that.titlesNames = [
      {
        id: 1,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Executioner',
        description: ''
      },
      {
        id: 2,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Taste Tester',
        description: 'Your culinary skill is unquestioned; increases Cooking proficiency +1,000.'
      },
      {
        id: 3,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Herbalist',
        description: 'Your alchemical skill is unquestioned; increases Alchemy proficiency +1,000.'
      },
      {
        id: 4,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Prospector',
        description: 'Your prospecting skill is unquestioned; increases Mining proficiency +1,000.'
      },
      {
        id: 5,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Tree Trimmer',
        description: 'Your woodcutting skill is unquestioned; increases Logging proficiency +1,000.'
      },
      {
        id: 6,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Farm Hand',
        description: 'Your agricultural skill is unquestioned; increases Farming proficiency +1,000.'
      },
      {
        id: 7,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Executioner',
        description: ''
      },
      {
        id: 8,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Forager',
        description: 'Your collecting skill is unquestioned; increases Gathering proficiency +1,000.'
      },
      {
        id: 9,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ranch Hand',
        description: 'Your ranching skill is unquestioned; increases Husbandry proficiency +1,000.'
      },
      {
        id: 10,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master Maester',
        description: ''
      },
      {
        id: 11,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Demolition Man',
        description: ''
      },
      {
        id: 12,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Castle Crasher',
        description: ''
      },
      {
        id: 13,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Vampire Slayer',
        description: ''
      },
      {
        id: 14,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dungeon Delver',
        description: ''
      },
      {
        id: 15,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cradle Shaker',
        description: ''
      },
      {
        id: 16,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master of the Faun',
        description: 'Your bravery has been acknowledged. You now take -10% less fall damage.'
      },
      {
        id: 17,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master of the Phoenix',
        description: 'Your bravery has been acknowledged. You can now climb trees and ladders 15% faster.'
      },
      {
        id: 18,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master of the Unknown',
        description: ''
      },
      {
        id: 19,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Supreme Clothsinger',
        description: 'You have received a special title in Tailoring. Increases proficiency +1,000.'
      },
      {
        id: 20,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Seams Good',
        description: 'You have received a special title in Tailoring. Increases proficiency +1,000.'
      },
      {
        id: 21,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Apprentice Acrobat',
        description: ''
      },
      {
        id: 22,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Wishful Aerobat',
        description: 'You have received a special title in Machinery. Increases proficiency +1,000.'
      },
      {
        id: 23,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Alchemist',
        description: 'Your alchemical skill is unquestioned; increases Alchemy proficiency +2,000.'
      },
      {
        id: 24,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Architect',
        description: 'Your architectural skill is unquestioned; increases Construction proficiency +2,000.'
      },
      {
        id: 25,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Cook',
        description: 'Your culinary skill is unquestioned; increases Cooking proficiency +2,000.'
      },
      {
        id: 26,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Craftsman',
        description: 'Your craftsmanship is unquestioned; increases Handicraft proficiency +2,000.'
      },
      {
        id: 27,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Rancher',
        description: 'Your ranching skill is unquestioned; increases Husbandry proficiency +2,000.'
      },
      {
        id: 28,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Farmer',
        description: 'Your agricultural skill is unquestioned; increases Farming proficiency +2,000.'
      },
      {
        id: 29,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Logger',
        description: 'Your woodcutting skill is unquestioned; increases Logging proficiency +2,000.'
      },
      {
        id: 30,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Gatherer',
        description: 'Your collecting skill is unquestioned; increases Gathering proficiency +2,000.'
      },
      {
        id: 31,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Mechanic',
        description: 'Your mechanical skill is unquestioned; increases Machining proficiency +2,000.'
      },
      {
        id: 32,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Metalworker',
        description: 'Your blacksmithing skill is unquestioned; increases Metalwork proficiency +2,000.'
      },
      {
        id: 33,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Printer',
        description: 'Your typography skill is unquestioned; increases Printing proficiency +2,000.'
      },
      {
        id: 34,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Miner',
        description: 'Your prospecting skill is unquestioned; increases Mining proficiency +2,000.'
      },
      {
        id: 35,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Mason',
        description: 'Your chiseling skill is unquestioned; increases Masonry proficiency +2,000.'
      },
      {
        id: 36,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Tailor',
        description: 'Your sewing skill is unquestioned; increases Tailoring proficiency +2,000.'
      },
      {
        id: 37,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Tanner',
        description: 'Your tanning skill is unquestioned; increases Leatherwork proficiency +2,000.'
      },
      {
        id: 38,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Smith',
        description: 'Your weaponsmithing skill is unquestioned; increases Weaponry proficiency +2,000.'
      },
      {
        id: 39,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Carpenter',
        description: 'Your woodworking skill is unquestioned; increases Carpentry proficiency +2,000.'
      },
      {
        id: 40,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Thief',
        description: 'Your dexterity is unquestioned; increases Larceny proficiency +2,000.'
      },
      {
        id: 41,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Merchant',
        description: 'Your business skill is unquestioned; increases Commerce proficiency +2,000.'
      },
      {
        id: 42,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Alchemist',
        description: 'Your alchemical skill is unquestioned; increases Alchemy proficiency +4,000.'
      },
      {
        id: 43,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Architect',
        description: 'Your architectural skill is unquestioned; increases Construction proficiency +4,000.'
      },
      {
        id: 44,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Cook',
        description: 'Your culinary skill is unquestioned; increases Cooking proficiency +4,000.'
      },
      {
        id: 45,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Craftsman',
        description: 'Your craftsmanship is unquestioned; increases Handicraft proficiency +4,000.'
      },
      {
        id: 46,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Rancher',
        description: 'Your ranching skill is unquestioned; increases Husbandry proficiency +4,000.'
      },
      {
        id: 47,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Farmer',
        description: 'Your agricultural skill is unquestioned; increases Farming proficiency +4,000.'
      },
      {
        id: 48,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Logger',
        description: 'Your woodcutting skill is unquestioned; increases Logging proficiency +4,000.'
      },
      {
        id: 49,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Gatherer',
        description: 'Your collecting skill is unquestioned; increases Gathering proficiency +4,000.'
      },
      {
        id: 50,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Mechanic',
        description: 'Your mechanical skill is unquestioned; increases Machining proficiency +4,000.'
      },
      {
        id: 51,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Metalworker',
        description: 'Your blacksmithing skill is unquestioned; increases Metalwork proficiency +4,000.'
      },
      {
        id: 52,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Printer',
        description: 'Your typography skill is unquestioned; increases Printing proficiency +4,000.'
      },
      {
        id: 53,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Miner',
        description: 'Your prospecting skill is unquestioned; increases Mining proficiency +4,000.'
      },
      {
        id: 54,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Mason',
        description: 'Your chiseling skill is unquestioned; increases Masonry proficiency +4,000.'
      },
      {
        id: 55,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Tailor',
        description: 'Your sewing skill is unquestioned; increases Tailoring proficiency +4,000.'
      },
      {
        id: 56,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Tanner',
        description: 'Your tanning skill is unquestioned; increases Leatherwork proficiency +4,000.'
      },
      {
        id: 57,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Weaponcrafter',
        description: 'Your weaponsmithing skill is unquestioned; increases Weaponry proficiency +4,000.'
      },
      {
        id: 58,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Carpenter',
        description: 'Your woodworking skill is unquestioned; increases Carpentry proficiency +4,000.'
      },
      {
        id: 59,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Thief',
        description: 'Your dexterity is unquestioned; increases Larceny proficiency +4,000.'
      },
      {
        id: 60,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Merchant',
        description: 'Your business skill is unquestioned; increases Commerce proficiency +4,000.'
      },
      {
        id: 61,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Double, Double, Toil and Trouble',
        description: 'Your alchemical skill is unquestioned; increases Alchemy proficiency +8,000 and Spirit +10.'
      },
      {
        id: 62,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Building Character',
        description: 'Your architectural skill is unquestioned; increases Construction proficiency +8,000 and Stamina +10.'
      },
      {
        id: 63,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Iron Chef',
        description: 'Your culinary skill is unquestioned; increases Cooking proficiency +8,000 and Intelligence +10.'
      },
      {
        id: 64,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Foxy and Crafty',
        description: 'Your craftsmanship is unquestioned; increases Handicraft proficiency +8,000 and Intelligence +10.'
      },
      {
        id: 65,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Squats with Spurs On	',
        description: 'Your ranching skill is unquestioned; increases Husbandry proficiency +8,000 and Strength +10.'
      },
      {
        id: 66,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Keep Calm and Farm On',
        description: 'Your agricultural skill is unquestioned; increases Farming proficiency +8,000 and Strength +10.'
      },
      {
        id: 67,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Can Count to Tree',
        description: 'Your woodcutting skill is unquestioned; increases Logging proficiency +8,000 and Stamina +10.'
      },
      {
        id: 68,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Foremost Forager',
        description: 'Your collecting skill is unquestioned; increases Gathering proficiency +8,000 and Agility +10.'
      },
      {
        id: 69,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Quantum Mechanic',
        description: 'Your mechanical skill is unquestioned; increases Machining proficiency +8,000 and Strength +10.'
      },
      {
        id: 70,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "THAT'S SO METAL",
        description: 'Your blacksmithing skill is unquestioned; increases Metalwork proficiency +8,000 and Stamina +10.'
      },
      {
        id: 71,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ink Is My Blood',
        description: 'Your typography skill is unquestioned; increases Printing proficiency +8,000 and Agility +10.'
      },
      {
        id: 72,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Pickaxe Percussionist',
        description: 'Your prospecting skill is unquestioned; increases Mining proficiency +8,000 and Stamina +10.'
      },
      {
        id: 73,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Gathers No Moss',
        description: 'Your chiseling skill is unquestioned; increases Masonry proficiency +8,000 and Strength +10.'
      },
      {
        id: 74,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fashions Fade; Style is Forever',
        description: 'Your sewing skill is unquestioned; increases Tailoring proficiency +8,000 and Spirit +10.'
      },
      {
        id: 75,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Compulsive Tanner',
        description: 'Your tanning skill is unquestioned; increases Leatherwork proficiency +8,000 and Spirit +10.'
      },
      {
        id: 76,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Not Today',
        description: 'Your weaponsmithing skill is unquestioned; increases Weaponry proficiency +8,000 and Strength +10.'
      },
      {
        id: 77,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hammertime',
        description: 'Your woodworking skill is unquestioned; increases Carpentry proficiency +8,000 and Agility +10.'
      },
      {
        id: 78,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Takes, but Does Not Earn',
        description: 'Your dexterity is unquestioned; increases Larceny proficiency +8,000 and Agility +10.'
      },
      {
        id: 79,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Supreme Silvertongue',
        description: 'Your business skill is unquestioned; increases Commerce proficiency +8,000 and Intelligence +10.'
      },
      {
        id: 80,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Dawn's Spear",
        description: 'You joined a Siege for the first time; increases max HP and max MP +50.'
      },
      {
        id: 81,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Dawn's Shield",
        description: 'You joined a Siege for the first time; increases max HP and max MP +50.'
      },
      {
        id: 82,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Soothsayer',
        description: 'You have accurately predicted the Siege war results; increases Intelligence and Spirit +5.'
      },
      {
        id: 83,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Fisherman',
        description: 'Your angling skill is unquestioned; increases Fishing proficiency +2,000.'
      },
      {
        id: 84,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Fisherman',
        description: 'Your angling skill is unquestioned; increases Fishing proficiency +4,000.'
      },
      {
        id: 85,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fishing for a Compliment',
        description: 'Your angling skill is unquestioned; increases Fishing proficiency +8,000 and Agility +10.'
      },
      {
        id: 86,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Wakes the Dead',
        description: 'You are willing to go to anyone in need of your service. Move Speed increased +1%.'
      },
      {
        id: 87,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Blissfully Matched',
        description: 'You look terrible, what were you up to last night? Decreases Stamina -1.'
      },
      {
        id: 88,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Vivacious Flame',
        description: 'You created new life out of clay; increases Handicraft proficiency +1,000.'
      },
      {
        id: 89,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Like a Ton of Bricks',
        description: 'You constructed a new brick building in a different space; increases Mining proficiency +1,000.'
      },
      {
        id: 90,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Horse Fancier',
        description: ''
      },
      {
        id: 91,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Triple-Tank',
        description: ''
      },
      {
        id: 92,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sailing Sultan',
        description: ''
      },
      {
        id: 93,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'High Glider',
        description: ''
      },
      {
        id: 94,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bobbleheaded',
        description: ''
      },
      {
        id: 95,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '100 Days of Summer',
        description: 'Your max mana has increased +100.'
      },
      {
        id: 96,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Barkbridge Builder',
        description: "You have learned about history's greatest library; your Intelligence has increased +3."
      },
      {
        id: 97,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Friend of Giants',
        description: "You have learned about history's greatest library; your Intelligence has increased +3."
      },
      {
        id: 98,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Autumn's Petal",
        description: 'You secretly helped the Kalia Family; your Intelligence has increased +3.'
      },
      {
        id: 99,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Kickboxer',
        description: 'Please observe your manners. Increases max health +50.'
      },
      {
        id: 100,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Early Bird',
        description: 'You played beautiful music; increases Intelligence +3.'
      },
      {
        id: 101,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Through the Looking Glass',
        description: 'You labored diligently in another dimension; increases Strength +10.'
      },
      {
        id: 102,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Seeks Truth, Not Greatness',
        description: 'You wrote helpful texts for other adventurers; increases Printing proficiency +1,000.'
      },
      {
        id: 103,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sage of Halo Rise',
        description: 'You built a school on the Halo Rise; increases Intelligence +2.'
      },
      {
        id: 104,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master of the Deep',
        description: ''
      },
      {
        id: 105,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Marine Biologist',
        description: 'You diligently studied angling; increases Fishing proficiency +1,000.'
      },
      {
        id: 106,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bull-Headed',
        description: 'Your weaponsmithing skill is unquestioned; increases Weaponry proficiency +1,000.'
      },
      {
        id: 107,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Plushie Patron',
        description: 'You poured your heart into making a plushie; increases Tailoring proficiency +1,000.'
      },
      {
        id: 108,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Family Time',
        description: "Your heart is touched by the father's love for his son; increases max health +50."
      },
      {
        id: 109,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Father Figure',
        description: "Your heart is touched by the son's love for his father; increases max health +50."
      },
      {
        id: 110,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Chronographer',
        description: 'You recorded time over a long period for archival purposes; increases Intelligence +3.'
      },
      {
        id: 111,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lovecrafter',
        description: 'You sculpted a statue in memory of the two tragic lovers; increases Handicraft proficiency +1,000.'
      },
      {
        id: 112,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Imagination + Junk = Inventor',
        description: 'You have enough energy to work all night. Increases Stamina +3.'
      },
      {
        id: 113,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Solid as a Rock',
        description: 'Your heart is warmed; increases max HP +50.'
      },
      {
        id: 114,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Honor Student of the World',
        description: ''
      },
      {
        id: 115,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Discriminating Tastes',
        description: 'Your angling skill is unquestioned; increases Fishing proficiency +1,000.'
      },
      {
        id: 116,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Student of the World',
        description: ''
      },
      {
        id: 117,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Artist of the Ages',
        description: ''
      },
      {
        id: 118,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Celebrated Artiste',
        description: ''
      },
      {
        id: 119,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Designer to the Gods',
        description: ''
      },
      {
        id: 120,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Designer to the Stars',
        description: ''
      },
      {
        id: 121,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Popular Clique',
        description: ''
      },
      {
        id: 122,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fish Wrangler',
        description: 'You are the editor-in-chief of a monthly magazine; increases Printing proficiency +1,000.'
      },
      {
        id: 123,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'World of Imagination',
        description: 'You created unique insignias; increases Intelligence +3.'
      },
      {
        id: 124,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Conductor of Beauty',
        description: 'You played beautiful music; increases Intelligence +3.'
      },
      {
        id: 125,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Meteoric Rise',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 126,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Judicious Juror',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 127,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Paparazzi Magnet',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 128,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Wishing Well',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 129,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Springmaker',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 130,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Pavitra's Blessing",
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 131,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Some Like It Hot',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 132,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Duke Cuke'em",
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 133,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Puppy Luv',
        description: 'You raised a great many creatures with love; increases Husbandry proficiency +1,000.'
      },
      {
        id: 134,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Patchwork Heart',
        description: 'You created a variety of textiles of your own; your Tailoring proficiency has increased +1,000.'
      },
      {
        id: 135,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Goddess's Clothspinner",
        description: 'You successfully recreated the robe of the Nuian Priests; increases Tailoring proficiency +1,000.'
      },
      {
        id: 136,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sea Scholar',
        description: ''
      },
      {
        id: 137,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Plainsracer',
        description: 'The energy of the plains washes over you; your Spirit has increased +3.'
      },
      {
        id: 138,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Delivery Not Included',
        description: "You're itching for speed; increases Agility +3."
      },
      {
        id: 139,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Never Fast Enough',
        description: "You're itching for speed; increases Agility +3."
      },
      {
        id: 140,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Windracer',
        description: "You're itching for speed; increases Agility +3."
      },
      {
        id: 141,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sweet Arts',
        description: 'The rich aroma of chocolate is heavenly; increases Cooking proficiency +1,000.'
      },
      {
        id: 142,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Born a Poet; Became a Craftsman',
        description: 'You created your own butler; increases Handicraft proficiency +1,000.'
      },
      {
        id: 143,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Picky Eater',
        description: 'You have good taste in fashion; increases Tailoring proficiency +1,000.'
      },
      {
        id: 144,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Nui's Faithful",
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 145,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dutybound',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 146,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Got Milk?',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 147,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Happiness Is a Warm Puppy',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 148,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Gaia's Hands",
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 149,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Jack of All Trades',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 150,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Feathering the Nest',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 151,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Blacksmith Buddies',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 152,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Shieldbreaker',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 153,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Honor Seeker',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 154,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'With Honor and Skill',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 155,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Honor's Champion",
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 156,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Time Lord',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 157,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Paddy-Cakes',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 158,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dreamdancer',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 159,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Blood Pact',
        description: 'This symbol of a firm promise increases max HP and max MP +30.'
      },
      {
        id: 160,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Soul of ArcheAge',
        description: 'You wrote a catchy song; increases Composition proficiency +1,000.'
      },
      {
        id: 161,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guardian of the High Seas	',
        description: ''
      },
      {
        id: 162,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Outlaw of the High Seas',
        description: ''
      },
      {
        id: 163,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sunkissed',
        description: 'You quietly watched the passage of time; increases Spirit +3.'
      },
      {
        id: 164,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Speaks Through Music',
        description: 'You poured your heart into playing the ensemble; increases Composition proficiency +1,000.'
      },
      {
        id: 165,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lifeshaper',
        description: 'You created an exceptional Goblin Glider; increases Handicraft proficiency +1,000.'
      },
      {
        id: 166,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Treehugger',
        description: 'Moringa lingliring moringaringa. Moringa 3 moringaringa. (Increases Intelligence +3.)'
      },
      {
        id: 167,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '5th Rank Soldier',
        description: "Bestows boosts befitting a recipient of the title '5th Rank Soldier.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +4."
      },
      {
        id: 168,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '4th Rank Soldier',
        description: "Bestows boosts befitting a recipient of the title '4th Rank Soldier.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +6."
      },
      {
        id: 169,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '3rd Rank Soldier',
        description: "Bestows boosts befitting a recipient of the title '3rd Rank Soldier.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +8."
      },
      {
        id: 170,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '2nd Rank Soldier',
        description: "Bestows boosts befitting a recipient of the title '2nd Rank Soldier.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +10."
      },
      {
        id: 171,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '1st Rank Soldier',
        description: "Bestows boosts befitting a recipient of the title '1st Rank Soldier.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +12."
      },
      {
        id: 172,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '3rd Rank Knight',
        description: "Bestows boosts befitting a recipient of the title '3rd Rank Knight.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +14."
      },
      {
        id: 173,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '2nd Rank Knight',
        description: "Bestows boosts befitting a recipient of the title '2nd Rank Knight.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +16."
      },
      {
        id: 174,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '1st Rank Knight',
        description: "	Bestows boosts befitting a recipient of the title '1st Rank Knight.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +18."
      },
      {
        id: 175,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Grand Master',
        description: "Bestows boosts befitting a recipient of the title 'Grand Master.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +20."
      },
      {
        id: 176,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'General',
        description: "Bestows boosts befitting a recipient of the title 'General.' Increases Strength, Agility, Stamina, Intelligence, and Spirit +25."
      },
      {
        id: 177,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Desert Fox',
        description: 'Beware pirates! They keep a lookout for swimmers and sneak up on any they find. Increases swimming speed +20%.'
      },
      {
        id: 178,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Great White',
        description: 'Beware pirates! They keep a lookout for swimmers and sneak up on any they find. Increases swimming speed +20%. Increases cannon damage +2%.'
      },
      {
        id: 179,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Galegarden Gardener',
        description: "You've put a lot of time and effort into your properties, and it shows. Increases Construction proficiency +1000."
      },
      {
        id: 180,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Law-Abiding Citizen',
        description: 'You feel an unusually strong sense of duty. Increases Spirit +3.'
      },
      {
        id: 181,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cake Popper',
        description: "You made some cookie dough! Just eat it raw; it's more fun than baked. Increases Cooking proficiency +1000."
      },
      {
        id: 182,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Grand Conqueror',
        description: ''
      },
      {
        id: 183,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Just Conqueror',
        description: ''
      },
      {
        id: 184,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Monstrous Conqueror',
        description: ''
      },
      {
        id: 185,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Party Crasher	',
        description: 'You engineered useful functions with wide benefits. Increases Machinery proficiency +1000.'
      },
      {
        id: 186,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fearless Leader',
        description: 'You engineered useful functions with wide benefits. Increases Machinery proficiency +1000.'
      },
      {
        id: 187,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'ArcheMaster',
        description: ''
      },
      {
        id: 188,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fur-Friendly',
        description: 'The energy of the Firran imbues you. Increases Spirit +3.'
      },
      {
        id: 189,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Team Player',
        description: "You feel like you can't fail at anything. Increases Machining proficiency +1000."
      },
      {
        id: 190,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Discord Destroyer',
        description: 'This feels like a day to teach those young kids a lesson. Increases Strength +3.'
      },
      {
        id: 191,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arena Spark',
        description: 'Akrites, God of Battles, blesses you. Increases Honor Points received at the end of the Arena +1. Increases Max HP +20.'
      },
      {
        id: 192,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arena Flame',
        description: 'Akrites, God of Battles, blesses you. Increases Honor Points received at the end of the Arena +2. Increases Max HP +40.'
      },
      {
        id: 193,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arena Torch',
        description: 'Akrites, God of Battles, blesses you. Increases Honor Points received at the end of the Arena +3. Increases Max HP +60.'
      },
      {
        id: 194,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arena Wildfire',
        description: 'Akrites, God of Battles, blesses you. Increases Honor Points received at the end of the Arena +4. Increases Max HP +80.'
      },
      {
        id: 195,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Royal Archivist',
        description: 'You have collected all of the Gods and Heroes Commemorative Coins. Increases Max HP and Max Mana +40.'
      },
      {
        id: 196,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Timeless Warrior',
        description: 'Grants martial arts training. Increases max mana +75.0. Increases Post-Cast Mana Regen +2.0. Ignores 30.0 Physical Defense.'
      },
      {
        id: 197,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Time Catcher',
        description: 'You have fished for a great deal of time. Increases Fishing proficiency +2000.'
      },
      {
        id: 198,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'ArcheRacer',
        description: "You're a speedster! Increases Machinery Proficiency +2,000. Increases Move Speed +2%."
      },
      {
        id: 199,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Poet Laureate',
        description: 'You have reminded the people of the famous bard Lucius and his beautiful and clever prose. Increases your Strength, Agility, Stamina, Intelligence, and Spirit +1.'
      },
      {
        id: 200,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Silver Tongued',
        description: 'This power is bestowed on poets with a silver tongue. Increases Stamina +1.'
      },
      {
        id: 201,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'First Fisherman',
        description: 'You are the first person to fish a large fish. Increases Fishing proficiency +1000.'
      },
      {
        id: 202,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arena King',
        description: 'Akrites, God of Battles, blesses you. Increases Honor Points received at the end of the Arena +2. Increases Max HP +40.'
      },
      {
        id: 203,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Smarty Pants',
        description: 'Your imaginative creation is an inspiration to all. Increases Handicraft proficiency +1000.'
      },
      {
        id: 204,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Brainstormer',
        description: 'Your imaginative creation is an inspiration to all. Increases Handicraft proficiency +1000.'
      },
      {
        id: 205,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Star-Crossed',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 206,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Healing Hand',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 207,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fearful',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 208,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bloodscythe',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 209,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Catch of the Day',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 210,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fishfiend',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 211,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Happy as a Clam',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 212,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Slightly Sticky',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 213,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Enchanted',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 214,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Crest Crafter',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 215,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Power Napper',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 216,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Layer It On',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 217,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Tango-mancer',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 218,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lucky Pouch',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 219,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ready to Rock',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 220,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Always Fresh',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 221,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bouncing Back',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 222,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Skillmaster',
        description: ''
      },
      {
        id: 223,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Narcissist',
        description: ''
      },
      {
        id: 224,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Adventuring Addict',
        description: ''
      },
      {
        id: 225,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Workaholic',
        description: ''
      },
      {
        id: 226,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Shadowhunter',
        description: ''
      },
      {
        id: 227,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fiendbreeder',
        description: ''
      },
      {
        id: 228,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Pack Leader',
        description: ''
      },
      {
        id: 229,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dances with Wolfhounds',
        description: ''
      },
      {
        id: 230,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Pride Leader',
        description: ''
      },
      {
        id: 231,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cat Whisperer',
        description: ''
      },
      {
        id: 232,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bear Chaser',
        description: ''
      },
      {
        id: 233,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bear Whisperer',
        description: ''
      },
      {
        id: 234,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Herd Racer',
        description: ''
      },
      {
        id: 235,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Horse Whisperer',
        description: ''
      },
      {
        id: 236,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Snowlion Collector',
        description: ''
      },
      {
        id: 237,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lion Tamer',
        description: ''
      },
      {
        id: 238,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Elk Collector',
        description: ''
      },
      {
        id: 239,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Elk Tamer',
        description: ''
      },
      {
        id: 240,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Leomorph Collector',
        description: ''
      },
      {
        id: 241,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Leomorph Tamer',
        description: ''
      },
      {
        id: 242,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Shadowcat Collector',
        description: ''
      },
      {
        id: 243,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Shadowcat Tamer',
        description: ''
      },
      {
        id: 244,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Yata Collector',
        description: ''
      },
      {
        id: 245,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Yata Tamer',
        description: ''
      },
      {
        id: 246,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Animal Lover',
        description: ''
      },
      {
        id: 247,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Crop Whisperer',
        description: ''
      },
      {
        id: 248,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'A Whole New World',
        description: ''
      },
      {
        id: 249,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fishphiliac',
        description: ''
      },
      {
        id: 250,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bobble-Headed',
        description: ''
      },
      {
        id: 251,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Plushie Hearted',
        description: ''
      },
      {
        id: 252,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'En-Vogue',
        description: ''
      },
      {
        id: 253,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Gazillionaire',
        description: ''
      },
      {
        id: 254,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Party Animal',
        description: ''
      },
      {
        id: 255,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ballsy and Lucky',
        description: ''
      },
      {
        id: 256,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Totally Forsaken',
        description: ''
      },
      {
        id: 257,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Big Spender',
        description: ''
      },
      {
        id: 258,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Tycoon',
        description: ''
      },
      {
        id: 259,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Another Man's Treasure",
        description: ''
      },
      {
        id: 260,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Durability Master',
        description: ''
      },
      {
        id: 261,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Beam Me Up',
        description: ''
      },
      {
        id: 262,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Auroran Defender',
        description: ''
      },
      {
        id: 263,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Auroran Knight',
        description: ''
      },
      {
        id: 264,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Auroran Ambitions',
        description: ''
      },
      {
        id: 265,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Auroran Sorrows',
        description: ''
      },
      {
        id: 266,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dominator',
        description: ''
      },
      {
        id: 267,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "A Crafter's Life for Me",
        description: ''
      },
      {
        id: 268,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hasla Champion',
        description: ''
      },
      {
        id: 269,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Eternal Hasla Champion',
        description: ''
      },
      {
        id: 270,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Proven Warrior',
        description: ''
      },
      {
        id: 271,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Explosives Expert',
        description: ''
      },
      {
        id: 272,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'The Professional',
        description: ''
      },
      {
        id: 273,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Nothing Up My Sleeve',
        description: ''
      },
      {
        id: 274,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Phantom Thief',
        description: ''
      },
      {
        id: 275,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Weaponsmith',
        description: ''
      },
      {
        id: 276,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Armorsmith',
        description: ''
      },
      {
        id: 277,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Jewelsmith',
        description: ''
      },
      {
        id: 278,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master Shipwright',
        description: ''
      },
      {
        id: 279,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master Mechanic',
        description: ''
      },
      {
        id: 280,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Siege Engineer',
        description: ''
      },
      {
        id: 281,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Flight Engineer',
        description: ''
      },
      {
        id: 282,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Costs an Armoire and a Lathe',
        description: ''
      },
      {
        id: 283,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lumenmancer',
        description: ''
      },
      {
        id: 284,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Interior Designer',
        description: ''
      },
      {
        id: 285,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Awl-Encompassing',
        description: ''
      },
      {
        id: 286,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bedmaker',
        description: ''
      },
      {
        id: 287,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Chairman of Chairs',
        description: ''
      },
      {
        id: 288,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Periodic Tabler',
        description: ''
      },
      {
        id: 289,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master Printer',
        description: ''
      },
      {
        id: 290,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Stuffed with Fluff',
        description: ''
      },
      {
        id: 291,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Top Chef Master',
        description: ''
      },
      {
        id: 292,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Haranya Trademaster',
        description: ''
      },
      {
        id: 293,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Nuia Trademaster',
        description: ''
      },
      {
        id: 294,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Island Trademaster',
        description: ''
      },
      {
        id: 295,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ynystere Magnate',
        description: ''
      },
      {
        id: 296,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cinderstone Magnate',
        description: ''
      },
      {
        id: 297,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Something Fishy',
        description: ''
      },
      {
        id: 298,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Udderly Fabulous',
        description: ''
      },
      {
        id: 299,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sheep Follower',
        description: ''
      },
      {
        id: 300,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Swineherd',
        description: ''
      },
      {
        id: 301,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Egg-cellent',
        description: ''
      },
      {
        id: 302,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Plucky Plucker',
        description: ''
      },
      {
        id: 303,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bronco Buster',
        description: ''
      },
      {
        id: 304,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fowl Mood',
        description: ''
      },
      {
        id: 305,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Goatherd',
        description: ''
      },
      {
        id: 306,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Quacked Up',
        description: ''
      },
      {
        id: 307,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Busy Bee',
        description: ''
      },
      {
        id: 308,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Veteran Vet',
        description: ''
      },
      {
        id: 309,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Free Flowering',
        description: ''
      },
      {
        id: 310,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Seedful Sower',
        description: ''
      },
      {
        id: 311,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Out on a Limb',
        description: ''
      },
      {
        id: 312,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lightning Rod',
        description: ''
      },
      {
        id: 313,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Earth Lover',
        description: ''
      },
      {
        id: 314,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Thirsty One',
        description: ''
      },
      {
        id: 315,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Greatest Explorer',
        description: ''
      },
      {
        id: 316,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Grand Historian',
        description: ''
      },
      {
        id: 317,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Salt of the Earth',
        description: ''
      },
      {
        id: 318,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'True Ascended',
        description: ''
      },
      {
        id: 319,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master Beasthunter',
        description: ''
      },
      {
        id: 320,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Homewrecker',
        description: ''
      },
      {
        id: 321,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sharpwind Vanquisher',
        description: ''
      },
      {
        id: 322,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cellar Vanquisher',
        description: ''
      },
      {
        id: 323,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Armory Vanquisher',
        description: ''
      },
      {
        id: 324,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hadir Vanquisher',
        description: ''
      },
      {
        id: 325,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Abyss Vanquisher',
        description: ''
      },
      {
        id: 326,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Kroloal Vanquisher',
        description: ''
      },
      {
        id: 327,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Greater Abyssal Vanquisher',
        description: ''
      },
      {
        id: 328,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Serpentis Vanquisher',
        description: ''
      },
      {
        id: 329,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Drowned Vanquisher',
        description: ''
      },
      {
        id: 330,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dragon Slayer',
        description: ''
      },
      {
        id: 331,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'True Adventurer',
        description: ''
      },
      {
        id: 332,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Divemaster',
        description: ''
      },
      {
        id: 333,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Best Bookworm',
        description: ''
      },
      {
        id: 334,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ginseng Singer',
        description: ''
      },
      {
        id: 335,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Mining Engineer',
        description: ''
      },
      {
        id: 336,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Solzreed Cartographer',
        description: ''
      },
      {
        id: 337,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Gweonid Cartographer',
        description: ''
      },
      {
        id: 338,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lilyut Cartographer',
        description: ''
      },
      {
        id: 339,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dewstone Cartographer',
        description: ''
      },
      {
        id: 340,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'White Arden Cartographer',
        description: ''
      },
      {
        id: 341,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Marianople Cartographer',
        description: ''
      },
      {
        id: 342,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Two Crowns Cartographer',
        description: ''
      },
      {
        id: 343,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cinderstone Cartographer',
        description: ''
      },
      {
        id: 344,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Halcyona Cartographer',
        description: ''
      },
      {
        id: 345,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hellswamp Cartographer',
        description: ''
      },
      {
        id: 346,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sanddeep Cartographer',
        description: ''
      },
      {
        id: 347,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arcum Iris Cartographer',
        description: ''
      },
      {
        id: 348,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Falcorth Cartographer',
        description: ''
      },
      {
        id: 349,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Tigerspine Cartographer',
        description: ''
      },
      {
        id: 350,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Mahadevi Cartographer',
        description: ''
      },
      {
        id: 351,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Solis Cartographer',
        description: ''
      },
      {
        id: 352,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Villanelle Cartographer',
        description: ''
      },
      {
        id: 353,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Silent Forest Cartographer',
        description: ''
      },
      {
        id: 354,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ynystere Cartographer',
        description: ''
      },
      {
        id: 355,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Rookborne Cartographer',
        description: ''
      },
      {
        id: 356,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Windscour Cartographer',
        description: ''
      },
      {
        id: 357,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Perinoor Cartographer',
        description: ''
      },
      {
        id: 358,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hasla Cartographer',
        description: ''
      },
      {
        id: 359,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Karkasse Cartographer',
        description: ''
      },
      {
        id: 360,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Salty Sailor',
        description: ''
      },
      {
        id: 361,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Supreme Magistrate',
        description: ''
      },
      {
        id: 362,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Until Proven Guilty',
        description: ''
      },
      {
        id: 363,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Notorious Felon',
        description: ''
      },
      {
        id: 364,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bounty Hunter',
        description: ''
      },
      {
        id: 365,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Desperado',
        description: ''
      },
      {
        id: 366,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Repentant',
        description: ''
      },
      {
        id: 367,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'United We Stand',
        description: ''
      },
      {
        id: 368,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Daru Friend',
        description: ''
      },
      {
        id: 369,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Daru Buddy',
        description: ''
      },
      {
        id: 370,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Auroran Ascended',
        description: ''
      },
      {
        id: 371,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Kingslayer',
        description: ''
      },
      {
        id: 372,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Transcendent',
        description: ''
      },
      {
        id: 373,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Above and Beyond',
        description: ''
      },
      {
        id: 374,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "It's Over 90,000!",
        description: ''
      },
      {
        id: 375,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Cutpurse',
        description: ''
      },
      {
        id: 376,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ayanad Vanquisher',
        description: ''
      },
      {
        id: 377,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guardian of Reading Rainbows',
        description: ''
      },
      {
        id: 378,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Relic Guardian',
        description: ''
      },
      {
        id: 379,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Master Lunagemologist',
        description: ''
      },
      {
        id: 380,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Halcyona Dominator',
        description: ''
      },
      {
        id: 381,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cinderstone Dominator',
        description: ''
      },
      {
        id: 382,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hellswamp Dominator',
        description: ''
      },
      {
        id: 383,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sanddeep Dominator',
        description: ''
      },
      {
        id: 384,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ynystere Dominator',
        description: ''
      },
      {
        id: 385,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Rookborne Dominator',
        description: ''
      },
      {
        id: 386,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Perinoor Dominator',
        description: ''
      },
      {
        id: 387,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hasla Dominator',
        description: ''
      },
      {
        id: 388,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Karkasse Dominator',
        description: ''
      },
      {
        id: 389,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Freedich Dominator',
        description: ''
      },
      {
        id: 390,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arcadian Dominator',
        description: ''
      },
      {
        id: 391,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Halcyona Gulf Dominator',
        description: ''
      },
      {
        id: 392,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Castaway Dominator',
        description: ''
      },
      {
        id: 393,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Halcyona Haunt',
        description: ''
      },
      {
        id: 394,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cinderstone Haunt',
        description: ''
      },
      {
        id: 395,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hellswamp Haunt',
        description: ''
      },
      {
        id: 396,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sanddeep Haunt',
        description: ''
      },
      {
        id: 397,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ynystere Haunt',
        description: ''
      },
      {
        id: 398,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Rookborne Haunt',
        description: ''
      },
      {
        id: 399,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Perinoor Haunt',
        description: ''
      },
      {
        id: 400,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hasla Haunt',
        description: ''
      },
      {
        id: 401,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Karkasse Haunt',
        description: ''
      },
      {
        id: 402,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Freedich Haunt',
        description: ''
      },
      {
        id: 403,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arcadian Haunt',
        description: ''
      },
      {
        id: 404,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Halcyona Gulf Haunt',
        description: ''
      },
      {
        id: 405,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Castaway Haunt',
        description: ''
      },
      {
        id: 406,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Taste of Victory',
        description: ''
      },
      {
        id: 407,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Head in the Clouds',
        description: ''
      },
      {
        id: 408,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ultra-Chill',
        description: ''
      },
      {
        id: 409,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dream Came True',
        description: ''
      },
      {
        id: 410,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Filthy Rich',
        description: ''
      },
      {
        id: 411,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Nuian Historian',
        description: ''
      },
      {
        id: 412,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Elf Historian',
        description: ''
      },
      {
        id: 413,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Harani Historian',
        description: ''
      },
      {
        id: 414,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Firran Historian',
        description: ''
      },
      {
        id: 415,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lucky Strike',
        description: ''
      },
      {
        id: 416,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Year of the Horse',
        description: 'A new year of the blue horse has dawned. Increases Magic Defense Penetration +30.0. Increases max HP +75.0. Increases Health Regen +2.0.'
      },
      {
        id: 417,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lucius Reborn',
        description: ''
      },
      {
        id: 418,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hungover',
        description: ''
      },
      {
        id: 419,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Overly Polite',
        description: ''
      },
      {
        id: 420,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Moneymaker',
        description: ''
      },
      {
        id: 421,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ball Dropper',
        description: ''
      },
      {
        id: 422,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Windscour Dominator',
        description: ''
      },
      {
        id: 423,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Windscour Haunt',
        description: ''
      },
      {
        id: 424,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Star Recruiter',
        description: ''
      },
      {
        id: 425,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Haranyan Interpreter',
        description: ''
      },
      {
        id: 426,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Nuian Interpreter',
        description: ''
      },
      {
        id: 427,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sugar-Sweet',
        description: ''
      },
      {
        id: 428,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Crimson Watch',
        description: 'Increases max health and max mana +30.'
      },
      {
        id: 429,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lord of the Dance',
        description: ''
      },
      {
        id: 430,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Highly Secretive',
        description: ''
      },
      {
        id: 431,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Busybody',
        description: ''
      },
      {
        id: 432,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Fortune's Favorite",
        description: ''
      },
      {
        id: 433,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hapless',
        description: ''
      },
      {
        id: 434,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Expert Cutpurse',
        description: 'Your dexterity is unquestioned; increases Larceny proficiency +8,000 and Agility +10.'
      },
      {
        id: 435,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Raises the Roof',
        description: 'Your architectural skill is unquestioned; increases Construction proficiency +12,000 and Stamina +20.'
      },
      {
        id: 436,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Multifaceted',
        description: 'Your craftsmanship is unquestioned; increases Handicraft proficiency +12,000 and Intelligence +20.'
      },
      {
        id: 437,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'METAL MAYHEM',
        description: 'Your blacksmithing skill is unquestioned; increases Metalwork proficiency +12,000 and Stamina +20.'
      },
      {
        id: 438,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Car-diologist',
        description: 'Your mechanical skill is unquestioned; increases Machining proficiency +12,000 and Strength +20.'
      },
      {
        id: 439,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Krilling It',
        description: 'Your angling skill is unquestioned; increases Fishing proficiency +12,000 and Agility +20.'
      },
      {
        id: 440,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Grain Reaper',
        description: 'Your agricultural skill is unquestioned; increases Farming proficiency +12,000 and Strength +20.'
      },
      {
        id: 441,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Got Hammered',
        description: 'Your weaponsmithing skill is unquestioned; increases Weaponry proficiency +12,000 and Strength +20.'
      },
      {
        id: 442,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Maestro Thief',
        description: 'Your dexterity is unquestioned; increases Larceny proficiency +12,000 and Agility +20.'
      },
      {
        id: 443,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Nailed It!',
        description: 'Your dexterity is unquestioned; increases Larceny proficiency +12,000 and Agility +20.'
      },
      {
        id: 444,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Boiled and Oiled',
        description: 'Your tanning skill is unquestioned; increases Leatherwork proficiency +12,000 and Spirit +20.'
      },
      {
        id: 445,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Never Strikes Twice',
        description: 'Your woodcutting skill is unquestioned; increases Logging proficiency +12,000 and Stamina +20.'
      },
      {
        id: 446,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Taken for Granite',
        description: 'Your chiseling skill is unquestioned; increases Masonry proficiency +12,000 and Strength +20.'
      },
      {
        id: 447,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Criminal Mastermind',
        description: 'Your dexterity is unquestioned; increases Larceny proficiency +12,000 and Agility +20.'
      },
      {
        id: 448,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Periodically Epic',
        description: 'Your alchemical skill is unquestioned; increases Alchemy proficiency +12,000 and Spirit +20.'
      },
      {
        id: 449,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Culinary Cutthroat',
        description: 'Your culinary skill is unquestioned; increases Cooking proficiency +12,000 and Intelligence +20.'
      },
      {
        id: 450,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bound for Greatness',
        description: 'Your typography skill is unquestioned; increases Printing proficiency +12,000 and Agility +20.'
      },
      {
        id: 451,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Baller Status',
        description: 'Your business skill is unquestioned; increases Commerce proficiency +12,000 and Intelligence +20.'
      },
      {
        id: 452,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Shear Genius',
        description: 'Your sewing skill is unquestioned; increases Tailoring proficiency +12,000 and Spirit +20.'
      },
      {
        id: 453,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Rock Bottom',
        description: 'Your prospecting skill is unquestioned; increases Mining proficiency +12,000 and Stamina +20.'
      },
      {
        id: 454,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cutting Hedge Technology',
        description: 'Your collecting skill is unquestioned; increases Gathering proficiency +12,000 and Agility +20.'
      },
      {
        id: 455,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bleu Ribbon',
        description: 'Your ranching skill is unquestioned; increases Husbandry proficiency +12,000 and Strength +20.'
      },
      {
        id: 456,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Chart Topper',
        description: 'Your artistic skill is unquestioned; increases Artistry proficiency +12,000 and Spirit +20.'
      },
      {
        id: 457,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sublime Songsmith',
        description: 'Your artistic skill is unquestioned; increases Artistry proficiency +8,000 and Spirit +10.'
      },
      {
        id: 458,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ageless Architect',
        description: 'Your architectural knowledge deserves recognition; increases Construction proficiency +1000.'
      },
      {
        id: 459,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'New Beginnings Companion',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +7.'
      },
      {
        id: 460,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Memory Keeper',
        description: 'You honor the memory of noble dragons, long since dead. Increases Cannon Damage +1%. Increases Strength, Agility, Stamina, Intelligence, and Spirit +5.'
      },
      {
        id: 461,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Needs a Party',
        description: ''
      },
      {
        id: 462,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Needs a Guild',
        description: ''
      },
      {
        id: 463,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Be My Friend',
        description: ''
      },
      {
        id: 464,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Needs a Family',
        description: ''
      },
      {
        id: 465,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Needs Guild Recruits',
        description: ''
      },
      {
        id: 466,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Duel Seeker',
        description: ''
      },
      {
        id: 467,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Blackheart',
        description: "You have absorbed a portion of the Leviathan's spirit. A small part of its strength now flows through you. Increases received healing and Cannon Damage +1%."
      },
      {
        id: 468,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guild Combat Agent',
        description: ''
      },
      {
        id: 469,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guild Production Agent',
        description: ''
      },
      {
        id: 470,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guild Crafting Agent',
        description: ''
      },
      {
        id: 471,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guild Trade Agent',
        description: ''
      },
      {
        id: 472,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guild Dueling Agent',
        description: ''
      },
      {
        id: 473,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Snowdreamer',
        description: ''
      },
      {
        id: 474,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Stone Sprite',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 475,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lore King',
        description: 'Lore Kings are highly talented storytellers. Increases all Language Proficiencies +10,000.'
      },
      {
        id: 476,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lore Queen',
        description: 'Lore Queens are highly talented storytellers. Increases all Language Proficiencies +10,000.'
      },
      {
        id: 477,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bow Constellation',
        description: ''
      },
      {
        id: 478,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Boat Horn Constellation',
        description: ''
      },
      {
        id: 479,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bugle Constellation',
        description: ''
      },
      {
        id: 480,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Unicorn Constellation',
        description: ''
      },
      {
        id: 481,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Blind Eye Constellation',
        description: ''
      },
      {
        id: 482,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Chariot Constellation',
        description: ''
      },
      {
        id: 483,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Wand Constellation',
        description: ''
      },
      {
        id: 484,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Trident Constellation',
        description: ''
      },
      {
        id: 485,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Crown Constellation',
        description: ''
      },
      {
        id: 486,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Leopard Constellation',
        description: ''
      },
      {
        id: 487,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Brier Constellation',
        description: ''
      },
      {
        id: 488,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hut Constellation',
        description: ''
      },
      {
        id: 489,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ginseng Genius',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 490,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hamtastic',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 491,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Woodland Wonder',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 492,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Oremonger',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 493,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dawndrinker',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 494,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'In Grape Spirits',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 495,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'True Talent',
        description: ''
      },
      {
        id: 496,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Precious Voter',
        description: 'Increases max health and mana +120.'
      },
      {
        id: 497,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'First Hero of Nuia',
        description: 'Increases max health and mana +120.'
      },
      {
        id: 498,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'First Hero of Haranya',
        description: 'Increases max health and mana +120.'
      },
      {
        id: 499,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'First Pirate Hero',
        description: 'Increases max health and mana +120.'
      },
      {
        id: 500,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'First Auroran Hero',
        description: 'Increases max health and mana +120.'
      },
      {
        id: 501,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Beastmaster',
        description: ''
      },
      {
        id: 502,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Anonymous',
        description: ''
      },
      {
        id: 503,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Enthusiastic Adventurer',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +5.'
      },
      {
        id: 504,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arche Webtoon Author',
        description: ''
      },
      {
        id: 505,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Idle-Handed',
        description: ''
      },
      {
        id: 506,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Tortured Artist',
        description: 'Increases Artistry Proficiency +1,000.'
      },
      {
        id: 507,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Axis Mundi Pioneer',
        description: 'Increases Max Health and Mana +50.'
      },
      {
        id: 508,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cosmic Pioneer',
        description: ''
      },
      {
        id: 509,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cutie Patootie',
        description: ''
      },
      {
        id: 510,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Catching Fire',
        description: ''
      },
      {
        id: 511,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Abyssal Archaeologist',
        description: 'Increases Swim Speed +10%.'
      },
      {
        id: 512,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Disciple of Kyrios',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +7.'
      },
      {
        id: 513,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Enlightened ArcheMaster',
        description: ''
      },
      {
        id: 514,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Moon Crasher',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +7.'
      },
      {
        id: 515,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '1st Ever-Charming Exterminator',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +8.'
      },
      {
        id: 516,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '1st *Stardreamer*',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +8.'
      },
      {
        id: 517,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '1st Deadly Despicable',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +8.'
      },
      {
        id: 518,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Daydreamer',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +3.'
      },
      {
        id: 519,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Despicable',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +3.'
      },
      {
        id: 520,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ever-Charming',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +3.'
      },
      {
        id: 521,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: '*Stardreamer*',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +7.'
      },
      {
        id: 522,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Deadly Despicable	',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +7.'
      },
      {
        id: 523,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ever-Charming Exterminator',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +7.'
      },
      {
        id: 524,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Gallant Elk-Herder',
        description: ''
      },
      {
        id: 525,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Gallant Leomorph-Herder',
        description: ''
      },
      {
        id: 526,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Gallant Horse-Herder',
        description: ''
      },
      {
        id: 527,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Gallant Snowlion-Herder',
        description: ''
      },
      {
        id: 528,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guardian of Nuia',
        description: ''
      },
      {
        id: 529,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Guardian of Haranya',
        description: ''
      },
      {
        id: 530,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Seasoned Seaknight',
        description: ''
      },
      {
        id: 531,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Frozen Fisherman',
        description: 'Your efforts in the Miroir Tundra Fishing Cove have been recognized. Increases Fishing Proficiency +1000.'
      },
      {
        id: 532,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Storyteller',
        description: ''
      },
      {
        id: 533,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Solzreed Hunter',
        description: ''
      },
      {
        id: 534,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Lilyut Hunter',
        description: ''
      },
      {
        id: 535,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Gweonid Hunter',
        description: ''
      },
      {
        id: 536,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Dewstone Hunter',
        description: ''
      },
      {
        id: 537,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'White Arden Hunter',
        description: ''
      },
      {
        id: 538,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Marianople Hunter',
        description: ''
      },
      {
        id: 539,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Two Crowns Hunter',
        description: ''
      },
      {
        id: 540,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cinderstone Hunter',
        description: ''
      },
      {
        id: 541,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Halcyona Hunter',
        description: ''
      },
      {
        id: 542,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sanddeep Hunter',
        description: ''
      },
      {
        id: 543,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hellswamp Hunter',
        description: ''
      },
      {
        id: 544,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Karkasse Hunter',
        description: ''
      },
      {
        id: 545,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Arcum Iris Hunter',
        description: ''
      },
      {
        id: 546,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Falcorth Hunter',
        description: ''
      },
      {
        id: 547,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Tigerspine Hunter',
        description: ''
      },
      {
        id: 548,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Mahadevi Hunter',
        description: ''
      },
      {
        id: 549,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Solis Hunter',
        description: ''
      },
      {
        id: 550,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Villanelle Hunter',
        description: ''
      },
      {
        id: 551,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Silent Forest Hunter',
        description: ''
      },
      {
        id: 552,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ynystere Hunter',
        description: ''
      },
      {
        id: 553,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Rookborne Hunter',
        description: ''
      },
      {
        id: 554,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Windscour Hunter',
        description: ''
      },
      {
        id: 555,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Perinoor Hunter',
        description: ''
      },
      {
        id: 556,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hasla Hunter',
        description: ''
      },
      {
        id: 557,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Golden Ruins Hunter',
        description: ''
      },
      {
        id: 558,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Inquisitor',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +4.'
      },
      {
        id: 559,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Robotic Revenge',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +10.'
      },
      {
        id: 560,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Nui's Blessed",
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +7.'
      },
      {
        id: 561,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Soulpainter',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 562,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cold Hands, Fish Heart',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 563,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Songstopper',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 564,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Spar-Swagger',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 565,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Bittersweet',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 566,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'House of the Iris Sun',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 567,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Terminator',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 568,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Diamonds Are Forever',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 569,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Taste Tester',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 570,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Treasure Taker',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 571,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Traderunner',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 572,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Silver Heart',
        description: "You have surpassed your peers and earned the gods' blessing! Increases max health and mana +50."
      },
      {
        id: 573,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Warm Hearted',
        description: ''
      },
      {
        id: 574,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Kyprosa's Spark",
        description: ''
      },
      {
        id: 575,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Gene's Wanderlust",
        description: ''
      },
      {
        id: 576,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Lucius's Promise",
        description: ''
      },
      {
        id: 577,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Eanna's Mercy",
        description: ''
      },
      {
        id: 578,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fang of the Leviathan',
        description: ''
      },
      {
        id: 579,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Star Seeker',
        description: ''
      },
      {
        id: 580,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Monkeys Around',
        description: ''
      },
      {
        id: 581,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Inner Light',
        description: ''
      },
      {
        id: 582,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Anyfin is Possible',
        description: 'You are a magnificent angler. Increases Agility +20 and Strength +10.'
      },
      {
        id: 583,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Leaf Me Alone',
        description: 'You are a magnificent gatherer. Increases Agility +20 and Spirit +10.'
      },
      {
        id: 584,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Ink-redible',
        description: 'You are a magnificent printer. Increases Agility +20 and Intelligence +10.'
      },
      {
        id: 585,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Can Be Abrasive',
        description: 'You are a magnificent carpenter. Increases Agility +20 and Strength +10.'
      },
      {
        id: 586,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Elementally Talented',
        description: 'You are a magnificent alchemist. Increases Spirit +20 and Intelligence +10.'
      },
      {
        id: 587,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Darns It All',
        description: 'You are a magnificent tailor. Increases Spirit +20 and Stamina +10.'
      },
      {
        id: 588,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Cow-culating Killer',
        description: 'You are a magnificent tanner. Increases Spirit +20 and Agility +10.'
      },
      {
        id: 589,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Barter $auce',
        description: 'You are a magnificent trader. Increases Intelligence +20 and Spirit +10.'
      },
      {
        id: 590,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Art-official Intelligence',
        description: 'You are a magnificent artist. Increases Spirit +20 and Intelligence +10.'
      },
      {
        id: 591,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Mustards the Strength',
        description: 'You are a magnificent chef. Increases Intelligence +20 and Spirit +10.'
      },
      {
        id: 592,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Martial Arts and Crafts',
        description: 'You are a magnificent craftsman. Increases Intelligence +20 and Stamina +10.'
      },
      {
        id: 593,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Rooting for Thunder',
        description: 'You are a magnificent lumberjack. Increases Stamina +20 and Strength +10.'
      },
      {
        id: 594,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'So Basalty',
        description: 'You are a magnificent miner. Increases Stamina +20 and Spirit +10.'
      },
      {
        id: 595,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Always Ironic',
        description: 'You are a magnificent metalworker. Increases Stamina +20 and Agility +10.'
      },
      {
        id: 596,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "It's All Cementics",
        description: 'You are a magnificent architect. Increases Stamina +20 and Strength +10.'
      },
      {
        id: 597,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Needs Calf-eine',
        description: 'You are a magnificent rancher. Increases Strength +20 and Spirit +10.'
      },
      {
        id: 598,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Transformative Farmer',
        description: 'You are a magnificent farmer. Increases Strength +20 and Intelligence +10.'
      },
      {
        id: 599,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Driven to Distraction',
        description: 'You are a magnificent mechanic. Increases Strength +20 and Agility +10.'
      },
      {
        id: 600,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Hard Rock Life',
        description: 'You are a magnificent stonemason. Increases Strength +20 and Stamina +10.'
      },
      {
        id: 601,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Blacksmith',
        description: 'You are a magnificent weaponsmith. Increases Strength +20 and Agility +10.'
      },
      {
        id: 602,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Internet Explorer',
        description: 'You are a magnificent explorer. Increases Strength +20, and Agility and Stamina +10.'
      },
      {
        id: 603,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Stainless Steal',
        description: 'You are a magnificent larcenist. Increases Agility +20 and Stamina +10.'
      },
      {
        id: 604,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Roses are Red, Daru are Blue',
        description: ''
      },
      {
        id: 605,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Indomitable',
        description: ''
      },
      {
        id: 606,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Abyssal Adept',
        description: 'Increases Max Health +80 Decreases Mana Cost -5%'
      },
      {
        id: 607,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Founder',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +1.'
      },
      {
        id: 608,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Traveler',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +2.'
      },
      {
        id: 609,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Trailblazer',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +3.'
      },
      {
        id: 610,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Sojourner',
        description: 'Increases Strength, Agility, Stamina, Intelligence, and Spirit +1.'
      },
      {
        id: 611,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Spring Tidings',
        description: ''
      },
      {
        id: 612,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Freedich Fellowship',
        description: 'An exclusive title for the former rulers of Freedich Island. Increases Health +100 and Mana +100.'
      },
      {
        id: 613,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Barrel Rider',
        description: 'A title for those who participated in the Rum Runner Rapids event. Increases Swimming Speed +1%.'
      },
      {
        id: 614,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Soul Sworn',
        description: 'Increases XP gain +1%, Loot Drop Rate +1%, and PvE damage +1%.'
      },
      {
        id: 615,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Wayfarer',
        description: 'Increases XP gain +1% and Loot Drop Rate +1%.'
      },
      {
        id: 616,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Worldwalker',
        description: 'Increases XP gain +1%, Loot Drop Rate +1%, and PvE Attacks +1%.'
      },
      {
        id: 617,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Diamond Soul',
        description: 'Increases XP gain +1%, Loot Drop Rate +1%, and PvE Attacks +1%.'
      },
      {
        id: 618,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Northern Legion',
        description: 'Increases XP gain +1%, Loot Drop Rate +1%, and PvE Attacks +1%.'
      },
      {
        id: 619,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: "Sheepie's Keeper",
        description: ''
      },
      {
        id: 620,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Mistsong Maverick',
        description: 'Increases Loot Drop Rate +3% and decreases received PVE damage -1%.'
      },
      {
        id: 621,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Friend of Daru',
        description: ''
      },
      {
        id: 622,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Elixir Mixer',
        description: ''
      },
      {
        id: 623,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'A-List',
        description: 'A-List Title: Increases all Attacks and Healing Power+3 Increases Health and Mana +150'
      },
      {
        id: 624,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Idol',
        description: 'Idol	Idol Title: Increases all Attacks and Healing Power+4 Increases Health and Mana +200 Increases Defense and Magic Defense +15'
      },
      {
        id: 625,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'VIP',
        description: 'VIP Title: Increases all Attacks and Healing Power +6 Increases Health and Mana +250 Increases Defense and Magic Defense +30 Increases Defense and Magic Defense Penetration +15'
      },
      {
        id: 626,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Fiesta Fisherman',
        description: 'Increases Fishing Proficiency +10,000'
      },
      {
        id: 627,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Legendary Assassin',
        description: 'Increases all attacks and healing +4 Increases Health and Mana +150 Increases Defense and Magic Defense +10'
      },
      {
        id: 628,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Erenor PvP Grand Champion',
        description: ''
      },
      {
        id: 629,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Erenor PvP Champion',
        description: ''
      },
      {
        id: 630,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Erenor PvP Celebrant',
        description: ''
      },
      {
        id: 631,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Abyssal Hunter',
        description: 'Increases PvE Damage +2% and XP gain +5%.'
      },
      {
        id: 632,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/titles%2Ficon_title.png?alt=media&token=65ace588-9a3f-4181-8cb3-3e2db0a0d96c',
        title: 'Legendary Founder',
        description: 'One of the founders of ArcheAge. Increases Strength, Agility, Stamina, Intelligence, and Spirit +3.'
      }
    ];
    for (let j = 0; j < that.titlesNames.length; j++) {
      this._database.createTitle(that.titlesNames[j],that.titlesNames[j]["id"]);
    }
    that.titles = that._database.getAllTitles();
    setTimeout(function(){
      that.setPage(1);
    }, 2000);

    that.sortColumns = {
      active: 'id',
      descending: false
    }
  }

  ngOnInit() {
  }

  setPage(page: number) {
    let that = this;
    if (page < 1 || page > that.pager.totalPages) {
      return;
    }
    // get pager object from service
    that.pager = that._pagerService.getPager(that.titles.length, page);

    // get current page of items
    that.pagedItems = that.titles.slice(that.pager.startIndex, that.pager.endIndex + 1);
    // that.pagedItems = that.items;
  }

  onItemPage(itemId: any) {
    this.router.navigate(['titles', itemId]);
  }

  selectedClass(column): string{
    var sort = this.sortColumns;

    if (sort.active == column) {
      return sort.descending
        ? 'fa fa-sort-asc'
        : 'fa fa-sort-desc';
    }

    return 'fa fa-sort';
  }

  addClass(className) {
    return className;
  }

  changeSorting (column) {

    let sort = this.sortColumns;

    if (sort.active == column) {
      sort.descending = !sort.descending;

    } else {
      sort.active = column;
      sort.descending = false;
    }
  };

  convertSorting(): string{
    let that = this;
    return that.sortColumns.descending ? '-' + that.sortColumns.active : that.sortColumns.active;
  }

}
