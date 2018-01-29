import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ArcheageDatabaseService} from "../services/database.service";
import {PagerService} from "../services/pager.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {setTimeout} from "timers";

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {
  private sortColumns: any;
  private daggerNames: Object[];
  private daggerData: Object[] = [];
  private items: Array<Object>;
  private columns: Array<Object>;
  private proxyUrl: string  = 'https://crossorigin.me/';
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  theDataSource: Observable<string>;

  constructor(private _database: ArcheageDatabaseService,
              private _pagerService: PagerService,
              private router: Router,
              private route: ActivatedRoute,
              private _http: Http) {
    let that = this;
    that.columns = [
      {
        name: 'ID',
        className: 'item-id',
        id: 'id'
      },
      {
        name: 'Icon',
        className: 'item-icon',
        id: ''
      },
      {
        name: 'Item',
        className: 'item-name',
        id: 'name'
      },
      {
        name: 'Level',
        className: 'item-min-level',
        id: 'minLevel'
      },
      {
        name: 'Item Level',
        className: 'item-level',
        id: 'itemLevel'
      },
      {
        name: 'Str',
        className: 'item-attr-strength',
        id: 'attributes.strength'
      },
      {
        name: 'Agl',
        className: 'item-attr-agility',
        id: "attributes.agility"
      },
      {
        name: 'Sta',
        className: 'item-attr-stamina',
        id: 'attributes.stamina'
      },
      {
        name: 'Int',
        className: 'item-attr-intelligence',
        id: 'attributes.intelligence'
      },
      {
        name: 'Spi',
        className: 'item-attr-spirit',
        id: 'attributes.spirit'
      },
      {
        name: 'U',
        className: 'item-use',
        id: 'useEffect'
      },
      {
        name: 'E',
        className: 'item-equip',
        id: 'equipEffect'
      }
    ];
    that.daggerNames = [
      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2000,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_assassins_secret_dagger.jpg?alt=media&token=9a91e9c8-9e3e-4b29-9bfb-67901d2c2103',
        grade: 'Basic',
        name: "Assassin's Secret",
        lootType: 'T7 Obsidian',
        lootSource: 'Craft: Brimstone Gear',
        requiredLevel: '55',
        minLevel: 55,
        itemLevel: 63,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 482,
        dpsUpperText: 590,
        dps: 382.8,
        attributes: {
          magicAttack: 0,
          agility: 60,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0,
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: true,
        comboEffectText1: "Decreases target's Attack Speed",
        comboEffectText2: "and Cast Time",
        comboEffectStat1: "-87",
        comboEffectStat2: "-8%",
        equipEffect: true,
        equipEffectText1: 'Increases Ranged Critical Damage',
        equipEffectText2: '.',
        equipEffectText3: '',
        equipEffectStat1: '+17.0%',
        setEffect: false,
        setItems: [],
        equipmentPoints: 504,
        price: '4g15s80c',
        shopPrice: '20s79c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2001,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_assassins_secret_dagger.jpg?alt=media&token=9a91e9c8-9e3e-4b29-9bfb-67901d2c2103',
        grade: 'Basic',
        name: "Assassin's Secret",
        lootType: 'T7 Obsidian',
        lootSource: 'Craft: Brimstone Gear',
        requiredLevel: '55',
        minLevel: 55,
        itemLevel: 63,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 482,
        dpsUpperText: 590,
        dps: 382.8,
        attributes: {
          magicAttack: 0,
          agility: 43,
          stamina: 21,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: true,
        comboEffectText1: "Decreases target's Attack Speed",
        comboEffectText2: "and Cast Time",
        comboEffectStat1: "-87",
        comboEffectStat2: "-8%",
        equipEffect: true,
        equipEffectText1: 'Increases Ranged Critical Damage',
        equipEffectText2: '.',
        equipEffectText3: '',
        equipEffectStat1: '+17.0%',
        setEffect: false,
        setItems: [],
        equipmentPoints: 504,
        price: '4g15s80c',
        shopPrice: '20s79c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2002,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_insanitys_point_dagger.jpg?alt=media&token=57d25cab-9ab4-4a2d-adbc-78783f40c59a',
        grade: 'Basic',
        name: 'Insanity Point',
        lootType: 'T7 Obsidian',
        lootSource: 'Craft: Brimstone Gear',
        requiredLevel: '55',
        minLevel: 55,
        itemLevel: 63,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 482,
        dpsUpperText: 590,
        dps: 382.8,
        attributes: {
          magicAttack: 40,
          intelligence: 60,
          stamina: 0,
          spirit: 0,
          strength: 0,
          agility: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: true,
        comboEffectText1: 'Increases the duration of the Drop Back buff',
        comboEffectText2: 'seconds.',
        comboEffectStat1: '+0.5',
        comboEffectStat2: '',
        equipEffectText1: 'Decreases Cast Time',
        equipEffectText2: '.',
        equipEffectText3: '',
        equipEffect: true,
        equipEffectStat1: '-7.0%',
        setEffect: false,
        setItems: [],
        equipmentPoints: 504,
        price: '4g15s80c',
        shopPrice: '20s79c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2003,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_insanitys_point_dagger.jpg?alt=media&token=57d25cab-9ab4-4a2d-adbc-78783f40c59a',
        grade: 'Basic',
        name: 'Insanity Point',
        lootType: 'T7 Obsidian',
        lootSource: 'Craft: Brimstone Gear',
        requiredLevel: '55',
        minLevel: 55,
        itemLevel: 63,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 482,
        dpsUpperText: 590,
        dps: 382.8,
        attributes: {
          magicAttack: 40,
          intelligence: 60,
          stamina: 0,
          spirit: 0,
          strength: 0,
          agility: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: true,
        comboEffectText1: 'Increases the duration of the Drop Back buff',
        comboEffectText2: 'seconds.',
        comboEffectStat1: '+0.5',
        comboEffectStat2: '',
        equipEffect: true,
        equipEffectText1: 'Increases Attack Speed',
        equipEffectText2: '.',
        equipEffectText3: '',
        equipEffectStat1: '+1.3',
        setEffect: false,
        setItems: [],
        equipmentPoints: 504,
        price: '4g1580c',
        shopPrice: '2079c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2004,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_ayanad_earth_dagger.jpg?alt=media&token=861b0cd0-6856-409c-a380-74874478b9ed',
        grade: 'Basic',
        name: 'Ayanad Earth Dagger',
        lootType: 'Ayanad',
        lootSource: 'Sealed Ayanad Gear',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 62,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 467,
        dpsUpperText: 571,
        dps: 370.5,
        attributes: {
          magicAttack: 0,
          stamina: 59,
          agility: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          },
          {
            material: 'Salvaged Ayanad Dagger',
            grade: 'grand',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_grand.png?alt=media&token=564ea674-24c8-459c-befe-6f5855108b61',
            className: 'grandGradeColor',
            lowerLimit: false,
            upperLimit: false,
            salvageCount: 1,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_ayanad_salvage_dagger.jpg?alt=media&token=99f5bee4-63ea-4ccb-82f2-1eec9f3d1b76'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2005,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_ayanad_gale_dagger.jpg?alt=media&token=de8758ec-3e35-4bf7-80a4-48d0a35af07a',
        grade: 'Basic',
        name: 'Ayanad Gale Dagger',
        lootType: 'Ayanad',
        lootSource: 'Sealed Ayanad Gear',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 62,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 467,
        dpsUpperText: 571,
        dps: 370.5,
        attributes: {
          magicAttack: 0,
          agility: 59,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          },
          {
            material: 'Salvaged Ayanad Dagger',
            grade: 'grand',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_grand.png?alt=media&token=564ea674-24c8-459c-befe-6f5855108b61',
            className: 'grandGradeColor',
            lowerLimit: false,
            upperLimit: false,
            salvageCount: 1,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_ayanad_salvage_dagger.jpg?alt=media&token=99f5bee4-63ea-4ccb-82f2-1eec9f3d1b76'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2006,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_ayanad_life_dagger.jpg?alt=media&token=de1d7f39-95a9-46c1-9be8-93aaccf1a813',
        grade: 'Basic',
        name: 'Ayanad Life Dagger',
        lootType: 'Ayanad',
        lootSource: 'Sealed Ayanad Gear',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 62,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 467,
        dpsUpperText: 571,
        dps: 370.5,
        attributes: {
          magicAttack: 0,
          spirit: 59,
          stamina: 0,
          agility: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          },
          {
            material: 'Salvaged Ayanad Dagger',
            grade: 'grand',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_grand.png?alt=media&token=564ea674-24c8-459c-befe-6f5855108b61',
            className: 'grandGradeColor',
            lowerLimit: false,
            upperLimit: false,
            salvageCount: 1,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_ayanad_salvage_dagger.jpg?alt=media&token=99f5bee4-63ea-4ccb-82f2-1eec9f3d1b76'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2007,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_ayanad_mist_dagger.jpg?alt=media&token=e2ff80cc-5147-4b49-be80-65692946ba5e',
        grade: 'Basic',
        name: 'Ayanad Mist Dagger',
        lootType: 'Ayanad',
        lootSource: 'Sealed Ayanad Gear',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 62,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 467,
        dpsUpperText: 571,
        dps: 370.5,
        attributes: {
          magicAttack: 0,
          agility: 38,
          spirit: 25,
          stamina: 0,
          strength: 0,
          intelligence: 0

        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          },
          {
            material: 'Salvaged Ayanad Dagger',
            grade: 'grand',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_grand.png?alt=media&token=564ea674-24c8-459c-befe-6f5855108b61',
            className: 'grandGradeColor',
            lowerLimit: false,
            upperLimit: false,
            salvageCount: 1,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_ayanad_salvage_dagger.jpg?alt=media&token=99f5bee4-63ea-4ccb-82f2-1eec9f3d1b76'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2008,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_ayanad_mountain_dagger.jpg?alt=media&token=d9c377fb-392d-41be-bdd3-ebe7699ab0af',
        grade: 'Basic',
        name: 'Ayanad Mountain Dagger',
        lootType: 'Ayanad',
        lootSource: 'Sealed Ayanad Gear',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 62,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 467,
        dpsUpperText: 571,
        dps: 370.5,
        attributes: {
          magicAttack: 0,
          agility: 26,
          stamina: 22,
          spirit: 17,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          },
          {
            material: 'Salvaged Ayanad Dagger',
            grade: 'grand',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_grand.png?alt=media&token=564ea674-24c8-459c-befe-6f5855108b61',
            className: 'grandGradeColor',
            lowerLimit: false,
            upperLimit: false,
            salvageCount: 1,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_ayanad_salvage_dagger.jpg?alt=media&token=99f5bee4-63ea-4ccb-82f2-1eec9f3d1b76'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2009,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_ayanad_squall_dagger.jpg?alt=media&token=fae28848-bf61-4016-b5f5-6ceba0206153',
        grade: 'Basic',
        name: 'Ayanad Squall Dagger',
        lootType: 'Ayanad',
        lootSource: 'Sealed Ayanad Gear',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 62,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 467,
        dpsUpperText: 571,
        dps: 370.5,
        attributes: {
          magicAttack: 0,
          agility: 38,
          stamina: 25,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          },
          {
            material: 'Salvaged Ayanad Dagger',
            grade: 'grand',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_grand.png?alt=media&token=564ea674-24c8-459c-befe-6f5855108b61',
            className: 'grandGradeColor',
            lowerLimit: false,
            upperLimit: false,
            salvageCount: 1,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_ayanad_salvage_dagger.jpg?alt=media&token=99f5bee4-63ea-4ccb-82f2-1eec9f3d1b76'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2010,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_ayanad_stone_dagger.jpg?alt=media&token=02f391da-c1c6-49f8-b073-2debb35f2507',
        grade: 'Basic',
        name: 'Ayanad Stone Dagger',
        lootType: 'Ayanad',
        lootSource: 'Sealed Ayanad Gear',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 62,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 467,
        dpsUpperText: 571,
        dps: 370.5,
        attributes: {
          magicAttack: 0,
          stamina: 38,
          spirit: 25,
          agility: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: [
          {
            material: 'Sunlight Archeum Essence',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor',
            lowerLimit: 0,
            upperLimit: 0,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
          },
          {
            material: 'Salvaged Ayanad Dagger',
            grade: 'grand',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_grand.png?alt=media&token=564ea674-24c8-459c-befe-6f5855108b61',
            className: 'grandGradeColor',
            lowerLimit: false,
            upperLimit: false,
            salvageCount: 1,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_ayanad_salvage_dagger.jpg?alt=media&token=99f5bee4-63ea-4ccb-82f2-1eec9f3d1b76'
          }
        ]
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2011,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_prime_wicked_whisper_dagger.jpg?alt=media&token=f2ab12e7-9826-48cb-ab06-cba7c162bf5f',
        grade: 'Basic',
        name: 'Prime Wicked Whisper Dagger',
        lootType: 'Mistsong Summit',
        lootSource: 'Design',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 57,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: 'none',
        durability: '130/130',
        penetrationChance: false,
        amputationChance: false,
        chanceText: 'High',
        dps: false,
        attributes: {
          magicAttack: 0,
          strength: 25,
          agility: 33,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: true,
        useEffectText1: "Decreases Defense and Magic Defense",
        useEffectText2: "for targets within",
        useEffectText3: "for",
        useEffectText4: "Cooldown:",
        useEffectStat1: "-675",
        useEffectStat2: "8m",
        useEffectStat3: "6.5 sec.",
        useEffectStat4: "45 sec.",
        useEffectStat5: "Shares cooldown with other Dungeon items.",
        comboEffect: false,
        equipEffect: true,
        equipEffectText1: 'Activates',
        equipEffectText2: 'in',
        equipEffectText3: 'dungeons.',
        equipEffectStat1: 'Dimensional Destroyer',
        equipEffectStat2: 'Lv50+',
        setEffect: false,
        setItems: [],
        equipmentPoints: 456,
        price: '3g76s20c',
        shopPrice: '18s81c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2012,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_superior_wicked_whisper_dagger.jpg?alt=media&token=184a1dd9-a654-462b-97ad-4c3c0c568f01',
        grade: 'Basic',
        name: 'Superior Wicked Whisper Dagger',
        lootType: 'Mistsong Summit',
        lootSource: 'Design',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 55,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: 'none',
        durability: '130/130',
        penetrationChance: false,
        amputationChance: false,
        chanceText: 'High',
        dps: false,
        attributes: {
          magicAttack: 0,
          strength: 24,
          agility: 32,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: true,
        useEffectText1: "Decreases Defense and Magic Defense",
        useEffectText2: "for targets within",
        useEffectText3: "for",
        useEffectText4: "Cooldown:",
        useEffectStat1: "-500",
        useEffectStat2: "8m",
        useEffectStat3: "5 sec.",
        useEffectStat4: "45 sec.",
        useEffectStat5: "Shares cooldown with other Dungeon items.",
        comboEffect: false,
        equipEffect: true,
        equipEffectText1: 'Activates',
        equipEffectText2: 'in',
        equipEffectText3: 'dungeons.',
        equipEffectStat1: 'Dimensional Destroyer',
        equipEffect2: 'Lv50+',
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2013,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_supreme_wicked_whisper_dagger.jpg?alt=media&token=b4053fdf-4a37-4c73-96d6-24c0a23d6885',
        grade: 'Basic',
        name: 'Supreme Wicked Whisper Dagger',
        lootType: 'Mistsong Summit',
        lootSource: 'Design',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 59,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: 'none',
        durability: '130/130',
        penetrationChance: false,
        amputationChance: false,
        chanceText: 'High',
        dps: false,
        attributes: {
          magicAttack: 0,
          strength: 26,
          agility: 34,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: true,
        useEffectText1: "Decreases Defense and Magic Defense",
        useEffectText2: "for targets within",
        useEffectText3: "for",
        useEffectText4: "Cooldown:",
        useEffectStat1: "-850",
        useEffectStat2: "8m",
        useEffectStat3: "8 sec.",
        useEffectStat4: "45 sec.",
        useEffectStat5: "Shares cooldown with other Dungeon items.",
        comboEffect: false,
        equipEffect: true,
        equipEffectText1: 'Activates',
        equipEffectText2: 'in',
        equipEffectText3: 'dungeons.',
        equipEffectStat1: 'Dimensional Destroyer',
        equipEffect2: 'Lv50+',
        setEffect: false,
        setItems: [],
        equipmentPoints: 472,
        price: '3g89s40c',
        shopPrice: '19s47c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2014,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_wicked_whisper_dagger.jpg?alt=media&token=1c273472-6adb-4d6e-9e97-8ddb82dbabf7',
        grade: 'Basic',
        name: 'Wicked Whisper Dagger',
        lootType: 'Mistsong Summit',
        lootSource: 'Design',
        requiredLevel: '53 ~ 55',
        minLevel: 53,
        itemLevel: 54,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: 'none',
        durability: '130/130',
        penetrationChance: false,
        amputationChance: false,
        chanceText: 'High',
        dps: false,
        attributes: {
          magicAttack: 0,
          strength: 23,
          agility: 31,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: true,
        equipEffectText1: 'Activates',
        equipEffectText2: 'in',
        equipEffectText3: 'dungeons.',
        equipEffectStat1: 'Dimensional Destroyer',
        equipEffect2: 'Lv50+',
        setEffect: false,
        setItems: [],
        equipmentPoints: 432,
        price: '3g56s40c',
        shopPrice: '17s82c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2015,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_cursed_obsidian_dagger.jpg?alt=media&token=30ad9e21-6cc0-4ca0-9127-ef8138fd1727',
        grade: 'Basic',
        name: 'Cursed Obsidian Dagger',
        lootType: 'T3 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 50,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 313,
        dpsUpperText: 382,
        dps: 248.2,
        attributes: {
          magicAttack: 0,
          agility: 48,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffectText1: 'Increases Ranged Critical Damage',
        equipEffectText2: '.',
        equipEffect: '+10.0%',
        setEffect: false,
        setItems: [],
        equipmentPoints: 400,
        price: '3g23s40c',
        shopPrice: '16s17c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2016,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_dark_watcher's_dagger.jpg?alt=media&token=ecdcd951-fe30-4b54-9ec9-e0ec91703430",
        grade: 'Basic',
        name: "Dark Watcher's Dagger",
        lootType: 'Serpentis',
        lootSource: 'Dungeon: Serpentis',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 48,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationChance: true,
        amputationChance: false,
        chanceText: 'High',
        dpsLowerText: 292,
        dpsUpperText: 357,
        dps: 231.6,
        attributes: {
          magicAttack: 0,
          agility: 46,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: true,
        useEffectText1: "Gradually increases Melee Critical Rate",
        useEffectText2: "for",
        useEffectText3: "Cooldown:",
        useEffectText4: "",
        useEffectStat1: "+20%",
        useEffectStat2: "20 seconds.",
        useEffectStat3: "3 min",
        comboEffect: false,
        equipEffect: true,
        equipEffectText1: 'Activates',
        equipEffectText2: 'in',
        equipEffectText3: 'dungeons.',
        equipEffectStat1: 'Dimensional Destroyer',
        setEffect: true,
        setEffectText1: '(2Set) Increases Attack Speed',
        setEffectText2: 'and Move Speed',
        setEffectStat1: '+2',
        setEffectStat2: '+3%',
        setEffectTitle: "Void Leader's Mercy",
        setEffectCountText: "(2/2)",
        setItems: [
          {
            id: 2016,
            name: "Dark Watcher's Dagger",
            icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_dark_watcher's_dagger.jpg?alt=media&token=ecdcd951-fe30-4b54-9ec9-e0ec91703430",
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor setItem'
          },
          {
            name: 'Sinister Void Leader Dagger',
            id: 2048,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_void_leader_dagger.jpg?alt=media&token=9f927705-ab1e-481f-81a1-4313ac90ebfb',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor setItem'
          }
        ],
        equipmentPoints: 384,
        price: '2g83s80c',
        shopPrice: '14s19c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2017,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_delphinad_earth_dagger.jpg?alt=media&token=8ac7c272-ce2b-42e9-ae54-a8e84bc529e5',
        grade: 'Basic',
        name: "Delphinad Earth Dagger",
        lootType: 'Delphinad',
        lootSource: 'Craft: Sealed Delphinad Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 370,
        dpsUpperText: 453,
        dps: 294.0,
        attributes: {
          magicAttack: 0,
          stamina: 52,
          agility: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2018,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_delphinad_gale_dagger.jpg?alt=media&token=d337272c-88c6-42f9-b2d9-645552d89f9f',
        grade: 'Basic',
        name: "Delphinad Gale Dagger",
        lootType: 'Delphinad',
        lootSource: 'Craft: Sealed Delphinad Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 370,
        dpsUpperText: 453,
        dps: 294.0,
        attributes: {
          magicAttack: 0,
          agility: 52,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2019,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_delphinad_life_dagger.jpg?alt=media&token=d14dc08f-4df6-45e2-9d4b-622110e44c76',
        grade: 'Basic',
        name: "Delphinad Life Dagger",
        lootType: 'Delphinad',
        lootSource: 'Craft: Sealed Delphinad Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsText: '294.0 (370 - 453)',
        dps: 294.0,
        attributes: {
          magicAttack: 0,
          spirit: 52,
          stamina: 0,
          agility: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2020,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_delphinad_mist_dagger.jpg?alt=media&token=f65698df-e2fd-4f1c-b630-8d47da114770',
        grade: 'Basic',
        name: "Delphinad Mist Dagger",
        lootType: 'Delphinad',
        lootSource: 'Craft: Sealed Delphinad Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 370,
        dpsUpperText: 453,
        dps: 294.0,
        attributes: {
          magicAttack: 0,
          agility: 33,
          spirit: 22,
          stamina: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2021,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_delphinad_mountain_dagger.jpg?alt=media&token=4cd16841-a684-4c82-bd4b-66852932bec6',
        grade: 'Basic',
        name: "Delphinad Mountain Dagger",
        lootType: 'Delphinad',
        lootSource: 'Craft: Sealed Delphinad Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsText: '294.0 (370 - 453)',
        dps: 294.0,
        attributes: {
          magicAttack: 0,
          agility: 23,
          stamina: 19,
          spirit: 15,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2022,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_delphinad_squall_dagger.jpg?alt=media&token=5bc2c521-0423-48a6-86b0-d7d70c187aa8',
        grade: 'Basic',
        name: "Delphinad Squall Dagger",
        lootType: 'Delphinad',
        lootSource: 'Craft: Sealed Delphinad Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 370,
        dpsUpperText: 453,
        dps: 294.0,
        attributes: {
          magicAttack: 0,
          agility: 33,
          stamina: 22,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2023,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_delphinad_stone_dagger.jpg?alt=media&token=22208ecf-b8e8-4ba4-976a-5f2eba794132',
        grade: 'Basic',
        name: "Delphinad Stone Dagger",
        lootType: 'Delphinad',
        lootSource: 'Craft: Sealed Delphinad Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 370,
        dpsUpperText: 453,
        dps: 294.0,
        attributes: {
          magicAttack: 0,
          stamina: 33,
          spirit: 22,
          agility: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2024,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_desire's_claw_dagger.jpg?alt=media&token=76c54174-2349-48b0-89e6-9a22ec71250f",
        grade: 'Basic',
        name: "Desire's Claw",
        lootType: 'T4 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 52,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsText: '265.7 (335 - 409)',
        dps: 265.7,
        attributes: {
          magicAttack: 0,
          agility: 49,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: true,
        equipEffectText1: 'Increases Ranged Critical Damage',
        equipEffectText2: '.',
        equipEffectText3: '',
        equipEffectStat1: '+12.0%',
        setEffect: false,
        setItems: [],
        equipmentPoints: 416,
        price: '3g43s20c',
        shopPrice: '17s16c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2025,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_dreamer's_point_dagger.jpg?alt=media&token=93cfcf27-9873-42d1-b319-3da0709b1543",
        grade: 'Basic',
        name: "Dreamer's Point",
        lootType: 'T5 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 265,
        dpsUpperText: 323,
        dps: 294,
        attributes: {
          magicAttack: 30,
          strength: 17,
          agility: 12,
          intelligence: 29,
          stamina: 0,
          spirit: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: true,
        equipEffectText1: 'Decreases Cast Time',
        equipEffectText2: '.',
        equipEffectText3: '',
        equipEffectStat1: '-1.5%',
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g53s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2026,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_epherium_earth_dagger.jpg?alt=media&token=d83ff199-6605-4465-8997-79e2be3172d9",
        grade: 'Basic',
        name: "Epherium Earth Dagger",
        lootType: 'Epherium',
        lootSource: 'Craft: Sealed Epherium Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 302,
        dpsUpperText: 369,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          stamina: 47,
          agility: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 392,
        price: '3g23s40c',
        shopPrice: '16s17c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2027,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_epherium_gale_dagger.jpg?alt=media&token=901fddaa-6366-4e68-9cf5-7d6a05827125",
        grade: 'Basic',
        name: "Epherium Gale Dagger",
        lootType: 'Epherium',
        lootSource: 'Craft: Sealed Epherium Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 302,
        dpsUpperText: 369,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 47,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 392,
        price: '3g23s40c',
        shopPrice: '16s17c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2028,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_epherium_life_dagger.jpg?alt=media&token=7103d73b-7cf2-4d5b-b2ec-f657f1706d07",
        grade: 'Basic',
        name: "Epherium Life Dagger",
        lootType: 'Epherium',
        lootSource: 'Craft: Sealed Epherium Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 302,
        dpsUpperText: 369,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          spirit: 47,
          stamina: 0,
          agility: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 392,
        price: '3g23s40c',
        shopPrice: '16s17c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2029,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_epherium_mist_dagger.jpg?alt=media&token=9f045074-7cf0-4e81-8956-5d2bd3527e54",
        grade: 'Basic',
        name: "Epherium Mist Dagger",
        lootType: 'Epherium',
        lootSource: 'Craft: Sealed Epherium Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 302,
        dpsUpperText: 369,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 30,
          spirit: 20,
          stamina: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 392,
        price: '3g23s40c',
        shopPrice: '16s17c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2030,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_epherium_mountain_dagger.jpg?alt=media&token=a9b33fd5-8a4b-4872-a095-a14d4e45e0f8",
        grade: 'Basic',
        name: "Epherium Mountain Dagger",
        lootType: 'Epherium',
        lootSource: 'Craft: Sealed Epherium Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 302,
        dpsUpperText: 369,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 21,
          stamina: 17,
          spirit: 14,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 392,
        price: '3g23s40c',
        shopPrice: '16s17c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2031,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_epherium_squall_dagger.jpg?alt=media&token=b01e12d1-4252-42a8-8077-0e8eb93013b1",
        grade: 'Basic',
        name: "Epherium Squall Dagger",
        lootType: 'Epherium',
        lootSource: 'Craft: Sealed Epherium Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsText: '239.8 (302 - 369)',
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 30,
          stamina: 20,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 392,
        price: '3g23s40c',
        shopPrice: '16s17c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2032,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_epherium_stone_dagger.jpg?alt=media&token=2548137d-f403-44f9-b629-e42b61cd70a7",
        grade: 'Basic',
        name: "Epherium Stone Dagger",
        lootType: 'Epherium',
        lootSource: 'Craft: Sealed Epherium Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 49,
        itemLevel: 55,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 302,
        dpsUpperText: 369,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          stamina: 30,
          spirit: 20,
          agility: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 392,
        price: '3g23s40c',
        shopPrice: '16s17c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2033,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_faded_dark_watcher's_dagger.jpg?alt=media&token=2b0a9847-6d51-46ae-9601-af6cb263605e",
        grade: 'Basic',
        name: "Faded Dark Watcher's Dagger",
        lootType: 'Serpentis',
        lootSource: 'Dungeon: Serpentis',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 48,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 292,
        dpsUpperText: 357,
        dps: 231.6,
        attributes: {
          magicAttack: 0,
          agility: 46,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Activates Dimensional Destroyer in Lv50+ dungeons.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 384,
        price: '2g83s80c',
        shopPrice: '14s19c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2034,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_hellkissed_dagger.jpg?alt=media&token=7e11bc98-26ee-45e9-b166-9a4e736708b9",
        grade: 'Basic',
        name: "Hellkissed Dagger",
        lootType: "Goddess's Weapon Chest",
        lootSource: 'Loyalty Shop: Divine Key',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 53,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 346,
        dpsUpperText: 423,
        dps: 274.9,
        attributes: {
          magicAttack: 0,
          agility: 50,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 424,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },
      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2035,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_honor's_mighty_slashing_dagger.jpg?alt=media&token=9e636ae7-3eb4-4427-a1e3-26e799cbbc1b",
        grade: 'Basic',
        name: "Honor's Mighty Slashing Dagger",
        lootType: 'T2 Honor',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 44,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 254,
        dpsUpperText: 310,
        dps: 201.2,
        attributes: {
          magicAttack: 0,
          strength: 15,
          agility: 30,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: 'Deals #{min_damage}-#{max_damage} Physical Damage and inflicts Bleed for 14 sec. Cooldown: 2 min Shares a cooldown with other Honor items.',
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 352,
        price: '2g31s00c',
        shopPrice: '11s55c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2036,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_honorable_bleeding_dagger.jpg?alt=media&token=8a673bff-db08-4e47-9989-762962544a3b",
        grade: 'Basic',
        name: "Honorable Bleeding Dagger",
        lootType: 'none',
        lootSource: 'none',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 47,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 282,
        dpsUpperText: 344,
        dps: 223.7,
        attributes: {
          magicAttack: 0,
          strength: 16,
          agility: 32,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: 'Deals #{min_damage}-#{max_damage} Physical Damage and inflicts Bleed for 14 sec. Cooldown: 2 min Shares a cooldown with other Honor items.',
        comboEffect: false,
        equipEffect: 'none',
        setEffect: false,
        setItems: [],
        equipmentPoints: 376,
        price: '3g10s20c',
        shopPrice: '15s51c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2037,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_lost_garden_faded_dagger.jpg?alt=media&token=ae553d5b-f970-476d-ac9e-5daa15e03915",
        grade: 'Basic',
        name: "Lost Garden Faded Dagger",
        lootType: 'Auroria',
        lootSource: 'Region: Auroria',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 46,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 272,
        dpsUpperText: 333,
        dps: 216.0,
        attributes: {
          magicAttack: 0,
          strength: 16,
          agility: 31,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: 'Restores 305 Health per second over 10 seconds. Cooldown: 2 minutes Shares a cooldown with other Honor items.',
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 368,
        price: '3g03s60c',
        shopPrice: '15s18c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2038,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_magnificent_mist_dagger.jpg?alt=media&token=2594af2c-d004-424c-befc-bbe7dc97661a",
        grade: 'Basic',
        name: "Magnificent Mist Dagger",
        lootType: 'Magnificent',
        lootSource: 'Craft: Sealed Magnificent Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 44,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 254,
        dpsUpperText: 310,
        dps: 201.2,
        attributes: {
          magicAttack: 0,
          agility: 27,
          spirit: 18,
          stamina: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 352,
        price: '2g90s40c',
        shopPrice: '14s52c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2039,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_magnificent_mountain_dagger.jpg?alt=media&token=762a667a-84c6-41ea-9442-efa0098b359f",
        grade: 'Basic',
        name: "Magnificent Mountain Dagger",
        lootType: 'Magnificent',
        lootSource: 'Craft: Sealed Magnificent Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 44,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 254,
        dpsUpperText: 310,
        dps: 201.2,
        attributes: {
          magicAttack: 0,
          agility: 18,
          stamina: 15,
          spirit: 12,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 352,
        price: '2g90s40c',
        shopPrice: '14s52c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2040,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_magnificent_squall_dagger.jpg?alt=media&token=f9be2717-d96c-4b8b-b733-92e0c45dd33f",
        grade: 'Basic',
        name: "Magnificent Squall Dagger",
        lootType: 'Magnificent',
        lootSource: 'Craft: Sealed Magnificent Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 44,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 254,
        dpsUpperText: 310,
        dps: 201.2,
        attributes: {
          magicAttack: 0,
          agility: 27,
          stamina: 18,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 352,
        price: '2g90s40c',
        shopPrice: '14s52c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2041,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_magnificent_stone_dagger.jpg?alt=media&token=e2abb589-954d-465b-be78-57bc5985fdf2",
        grade: 'Basic',
        name: "Magnificent Stone Dagger",
        lootType: 'Magnificent',
        lootSource: 'Craft: Sealed Magnificent Gear',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 44,
        pickup: 'none',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 254,
        dpsUpperText: 310,
        dps: 201.2,
        attributes: {
          magicAttack: 0,
          stamina: 27,
          spirit: 18,
          agility: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 352,
        price: '2g90s40c',
        shopPrice: '14s 52c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2042,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_nightmare_point_dagger.jpg?alt=media&token=979c150b-9cde-4999-8de7-71145b8b619b",
        grade: 'Basic',
        name: "Nightmare Point",
        lootType: 'T6 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 59,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 302,
        dpsUpperText: 369,
        dps: 335.8,
        attributes: {
          magicAttack: 35,
          strength: 19,
          agility: 12,
          intelligence: 31,
          stamina: 0,
          spirit: 0,
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Decreases Cast Time -1.6%.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 472,
        price: '3g89s40c',
        shopPrice: '19s 47c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2043,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_obsidian_dagger_library.jpg?alt=media&token=6ea2ed56-2530-4e63-9294-74b7f337844b",
        grade: 'Basic',
        name: "Obsidian Dagger",
        lootType: 'Library',
        lootSource: 'Region: Ayanad Library',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 52,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 335,
        dpsUpperText: 409,
        dps: 265.7,
        attributes: {
          magicAttack: 0,
          agility: 49,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffect: false,
        setItems: [],
        equipmentPoints: 416,
        price: '3g43s20c',
        shopPrice: '17s16c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2044,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_obsidian_dagger.jpg?alt=media&token=97703c50-4fa9-4ac1-9ee3-438ed353c68b",
        grade: 'Basic',
        name: "Obsidian Dagger",
        lootType: 'T1 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 46,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 272,
        dpsUpperText: 333,
        dps: 216.0,
        attributes: {
          magicAttack: 0,
          agility: 44,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2045,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_ominous_obsidian_dagger.jpg?alt=media&token=c4a51524-4908-4704-a4a1-cc768bd8ca1b",
        grade: 'Basic',
        name: "Ominous Obsidian Dagger",
        lootType: 'T2 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 48,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 292,
        dpsUpperText: 357,
        dps: 231.6,
        attributes: {
          magicAttack: 0,
          agility: 46,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +8.0%.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 384,
        price: '3g10s20c',
        shopPrice: '15s51c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2046,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_sacrificial_desire_dagger.jpg?alt=media&token=6908ebb1-8c16-40f2-96a9-bbbc5461582b",
        grade: 'Basic',
        name: "Sacrificial Desire",
        lootType: 'T6 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 59,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 423,
        dpsUpperText: 517,
        dps: 335.8,
        attributes: {
          magicAttack: 0,
          agility: 56,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +16.0%.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 472,
        price: '3g89s40c',
        shopPrice: '19s47c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2047,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_screaming_void_leader_dagger.jpg?alt=media&token=9f768e4c-702a-4609-bcc8-e50afa19c64d",
        grade: 'Basic',
        name: "Screaming Void Leader Dagger",
        lootType: 'Serpentis',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 50,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 313,
        dpsUpperText: 382,
        dps: 248.2,
        attributes: {
          magicAttack: 0,
          strength: 17,
          agility: 34,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: "Melee attacks have a chance of decreasing their targets' Attack Speeds -100 and Move Speeds -10% for #{buff_duration}, up to 3 times. The targets become immune to this effect for 90 seconds.",
        equipEffect: 'Activates Dimensional Destroyer in Lv50+ dungeons.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 400,
        price: '2g83s80c',
        shopPrice: '14s19c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2048,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_sinister_void_leader_dagger.jpg?alt=media&token=9d58d3f5-7bdc-4613-9805-91ac37652e30",
        grade: 'Basic',
        name: "Sinister Void Leader Dagger",
        lootType: 'Serpentis',
        lootSource: 'Dungeon: Serpentis',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 48,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 292,
        dpsUpperText: 357,
        dps: 231.6,
        attributes: {
          magicAttack: 0,
          strength: 16,
          agility: 32,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: "Melee attacks have a chance of decreasing their targets' Attack Speeds -100 and Move Speeds -10% for #{buff_duration}, up to 3 times. The targets become immune to this effect for 90 seconds.",
        equipEffect: 'Activates Dimensional Destroyer in Lv50+ dungeons.',
        setEffectText1: '(2Set) Increases Attack Speed',
        setEffectText2: 'and Move Speed',
        setEffectStat1: '+2',
        setEffectStat2: '+3%',
        setEffectTitle: "Void Leader's Mercy",
        setEffectCountText: "(2/2)",
        setItems: [
          {
            id: 2016,
            name: "Dark Watcher's Dagger",
            icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_dark_watcher's_dagger.jpg?alt=media&token=ecdcd951-fe30-4b54-9ec9-e0ec91703430",
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor setItem'
          },
          {
            name: 'Sinister Void Leader Dagger',
            id: 2048,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_void_leader_dagger.jpg?alt=media&token=9f927705-ab1e-481f-81a1-4313ac90ebfb',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor setItem'
          }
        ],
        equipmentPoints: 384,
        price: '2g83s80c',
        shopPrice: '14s19c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2049,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_sleeper's_point_dagger.jpg?alt=media&token=cb0f8b62-d4ca-40b6-900e-5f91d28958c2",
        grade: 'Basic',
        name: "Sleeper's Point",
        lootType: 'T4 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 52,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 239,
        dpsUpperText: 292,
        dps: 265.7,
        attributes: {
          magicAttack: 27,
          strength: 16,
          agility: 11,
          intelligence: 27,
          stamina: 0,
          spirit: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Decreases Cast Time -1.3%.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 352,
        price: '3g43s20c',
        shopPrice: '17s16c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2050,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_titan%E2%80%99s_pinion_dagger.jpg?alt=media&token=6b4bff64-307b-4e7e-a400-a71e32b3f1a6",
        grade: 'Basic',
        name: "Titan’s Pinion",
        lootType: 'Thunderwing Titan',
        lootSource: 'Thunderwing Titan',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 62,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dps: false,
        attributes: {
          magicAttack: 0,
          agility: 38,
          stamina: 25,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: false,
        setEffectText1: '(2Set) Increases Skill Damage',
        setEffectText2: 'Stuns all enemies hit by Titan’s Rib.',
        setEffectStat1: '+2%.',
        setEffectStat2: '',
        setEffectTitle: "Howling Thundergod Dagger",
        setEffectCountText: "(2/2)",
        setItems: [
          {
            id: 2051,
            name: "Titan’s Rib",
            icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_titan%E2%80%99s_rib_dagger.jpg?alt=media&token=784a0e69-a3c2-4b16-b602-786676078fe7",
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor setItem'
          },
          {
            name: "Titan’s Pinion",
            id: 2050,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_titan%E2%80%99s_pinion_dagger.jpg?alt=media&token=6b4bff64-307b-4e7e-a400-a71e32b3f1a6',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor setItem'
          }
        ],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2051,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_titan%E2%80%99s_rib_dagger.jpg?alt=media&token=784a0e69-a3c2-4b16-b602-786676078fe7",
        grade: 'Basic',
        name: "Titan’s Rib",
        lootType: 'Thunderwing Titan',
        lootSource: 'Thunderwing Titan',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 62,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 467,
        dpsUpperText: 571,
        dps: 370.5,
        attributes: {
          magicAttack: 0,
          strength: 42,
          agility: 21,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: 'Lets caster zoom 12m forward, dealing 1037.4 Physical Damage to any enemies in its path. Cooldown: 45 seconds Shares a cooldown with some item skills.',
        comboEffect: false,
        equipEffect: false,
        setEffectText1: '(2Set) Increases Skill Damage',
        setEffectText2: 'Stuns all enemies hit by Titan’s Rib.',
        setEffectStat1: '+2%.',
        setEffectStat2: '',
        setEffectTitle: "Howling Thundergod Dagger",
        setEffectCountText: "(2/2)",
        setItems: [
          {
            id: 2051,
            name: "Titan’s Rib",
            icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_titan%E2%80%99s_rib_dagger.jpg?alt=media&token=784a0e69-a3c2-4b16-b602-786676078fe7",
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor setItem'
          },
          {
            name: "Titan’s Pinion",
            id: 2050,
            icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Fitem_icon_titan%E2%80%99s_pinion_dagger.jpg?alt=media&token=6b4bff64-307b-4e7e-a400-a71e32b3f1a6',
            grade: 'basic',
            gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
            className: 'basicGradeColor setItem'
          }
        ],
        equipmentPoints: 496,
        price: '4g09s20c',
        shopPrice: '20s46c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2052,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_vexed_desire_dagger.jpg?alt=media&token=db482e5d-eaf7-4e9f-affd-6c6d3af9f686",
        grade: 'Basic',
        name: "Vexed Desire",
        lootType: 'T5 Obsidian',
        lootSource: 'Design',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 55,
        pickup: 'Binds on Equip',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 370,
        dpsUpperText: 453,
        dps: 294.0,
        attributes: {
          magicAttack: 0,
          agility: 52,
          stamina: 0,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +14.0%.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 440,
        price: '3g63s00c',
        shopPrice: '18s15c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2053,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_void_leader_dagger.jpg?alt=media&token=9f927705-ab1e-481f-81a1-4313ac90ebfb",
        grade: 'Basic',
        name: "Void Leader Dagger",
        lootType: 'Serpentis',
        lootSource: 'Dungeon: Serpentis',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 48,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 292,
        dpsUpperText: 357,
        dps: 231.6,
        attributes: {
          magicAttack: 0,
          strength: 16,
          agility: 32,
          stamina: 0,
          spirit: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Activates Dimensional Destroyer in Lv50+ dungeons.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 384,
        price: '2g83s80c',
        shopPrice: '14s19c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2054,
        icon: "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/weapons%2F1h%20Weapons%2Fdaggers%2Ficon_item_water-keened_blade_dagger.jpg?alt=media&token=e9300a92-cd8d-45c3-9f0a-646d1ce4d668",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 302,
        dpsUpperText: 369,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c',
        salvageMaterial: []
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2055,
        icon: "",
        grade: 'Basic',
        name: "Julo's Dagger",
        lootType: 'none',
        lootSource: 'none',
        requiredLevel: '48 ~ 55',
        minLevel: 48,
        itemLevel: 34,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 138.6,
        attributes: {
          magicAttack: 0,
          agility: 0,
          stamina: 12,
          spirit: 10,
          strength: 14,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: false,
        setItems: [],
        equipmentPoints: 272,
        price: '2g24s40c',
        shopPrice: '11s22c'
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2056,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2057,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2058,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },
      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2059,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2060,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2061,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },


      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2062,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },


      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2063,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },

      {
        itemClass: 'Dagger',
        itemType: 'weapons',
        id: 2064,
        icon: "",
        grade: 'Basic',
        name: "Water-Keened Blade",
        lootType: 'Sea of Drowned Love',
        lootSource: 'Sea of Drowned Love',
        requiredLevel: '50 ~ 55',
        minLevel: 50,
        itemLevel: 49,
        pickup: 'Binds on Pickup',
        weaponType: '1H Weapon',
        attackSpeed: '1.4',
        durability: '130/130',
        penetrationOrAmputationChance: 'High',
        dpsLowerText: 0,
        dpsUpperText: 0,
        dps: 239.8,
        attributes: {
          magicAttack: 0,
          agility: 17,
          stamina: 33,
          spirit: 0,
          strength: 0,
          intelligence: 0
        },
        maxGrade: 'Mythic',
        salvageable: 'Mag Salvageable',
        temper: 'Tempering available',
        lunagemSlots: 0,
        useEffect: false,
        comboEffect: false,
        equipEffect: 'Increases Ranged Critical Damage +6.0%.',
        setEffect: '(2Set) Attack Speed +3 Move Speed +4%',
        setItems: [{name: 'Screaming Void Leader Dagger', id: 2047},{name: 'Water-Keened Blade', id: 2054}],
        equipmentPoints: 352,
        price: '2g97s00c',
        shopPrice: '14s85c'
      },


    ];
    that.test();
    that.items = that._database.getAllItems();
    that.route.params.subscribe(matrixParams => {
      if (matrixParams.hasOwnProperty('item3')) {
        console.log('3 params');
        // that.buildId = matrixParams["buildId"];
        // that.savedBuild = that._database.getSavedBuild(that.buildId);
      } else if (matrixParams.hasOwnProperty('item2')) {
        console.log('2 params');
        // that.buildId = matrixParams["buildId"];
        // that.savedBuild = that._database.getSavedBuild(that.buildId);
      } else if (matrixParams.hasOwnProperty('item1')) {
        console.log('1 params');
        // that.buildId = matrixParams["buildId"];
        // that.savedBuild = that._database.getSavedBuild(that.buildId);
      } else {
        console.log('no params');
      }

    });
    that.theDataSource = that._http.get('http://archeagedatabase.net/query.php?a=weapon&type=dagger&l=us&_=1494528452073')
      .map(res => res.json());

    setTimeout(function(){
      that.setPage(1);
    }, 2000);

    that.sortColumns = {
      active: 'id',
      descending: false
    }
  }

  ngOnInit() {
    this.theDataSource.subscribe(
      data => {
        console.log(data);
        this.mineData(data);
      },
      err =>
        console.log('Can\'t get products. Error code: %s, URL: %s ',  err.status, err.url),
      () => console.log('Product(s) are retrieved')
    );
  }

  setPage(page: number) {
    let that = this;
    if (page < 1 || page > that.pager.totalPages) {
      return;
    }
    // get pager object from service
    that.pager = that._pagerService.getPager(that.items.length, page);

    // get current page of items
    that.pagedItems = that.items.slice(that.pager.startIndex, that.pager.endIndex + 1);
    // that.pagedItems = that.items;
  }

  onItemPage(itemId: any) {
    this.router.navigate(['info', 'item', itemId]);
  }

  selectedClass(column): string{
    let sort = this.sortColumns;

    if (sort.active === column) {
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

    if (sort.active === column) {
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

  test() {
    // this._database.removeItems();
    // for (let i = 2000; i <= (this.maxItems + 2000); i++) {
    for (let j = 0; j < 55; j++) {
      this._database.createItem(this.daggerNames[j], this.daggerNames[j]['id']);
    }

    // for (let j = 2125; j <= 2303; j++) {
    //   this._database.createItem(j, 'Sword', '1H Weapon');
    // }
    //
    // for (let j = 2326; j <= 2454; j++) {
    //   this._database.createItem(j, 'Katana', '1H Weapon');
    // }
    //
    // for (let j = 2454; j <= 2569; j++) {
    //   this._database.createItem(j, 'Axe', '1H Weapon');
    // }
    //
    // for (let j = 2569; j <= 2714; j++) {
    //   this._database.createItem(j, 'Club', '1H Weapon');
    // }
    //
    // for (let j = 2714; j <= 2856; j++) {
    //   this._database.createItem(j, 'Scepter', '1H Weapon');
    // }
    //
    // for (let j = 2856; j <= 2978; j++) {
    //   this._database.createItem(j, 'Shortspear', '1H Weapon');
    // }
    //
    // for (let j = 2978;j<= 3091; j++) {
    //   this._database.createItem(j, 'Greatsword','2H Weapon');
    // }
    //
    // for (let j = 3091;j<= 3247; j++) {
    //   this._database.createItem(j, 'Nodachi','2H Weapon');
    // }
    //
    // for (let j = 3247;j<= 3366; j++) {
    //   this._database.createItem(j, 'Greataxe','2H Weapon');
    // }
    //
    // for (let j = 3366;j<= 3544; j++) {
    //   this._database.createItem(j, 'Greatclub','2H Weapon');
    // }
    //
    // for (let j = 3544;j<= 3738; j++) {
    //   this._database.createItem(j, 'Staff','2H Weapon');
    // }
    //
    // for (let j = 3738;j<= 3850; j++) {
    //   this._database.createItem(j, 'Longspear','2H Weapon');
    // }
    //
    // for (let j = 3850;j<= 4001; j++) {
    //   this._database.createItem(j, 'Lute','Instruments');
    // }
    //
    // for (let j = 4001;j<= 4120; j++) {
    //   this._database.createItem(j, 'Flute','Instruments');
    // }
    //
    // for (let j = 4120;j<= 4152; j++) {
    //   this._database.createItem(j, 'Drum','Instruments');
    // }
    //
    // for (let j = 4152;j<= 4359; j++) {
    //   this._database.createItem(j, 'Bow','Bow');
    // }
    // }
    // for (let i = 0; i< 145; i++) {
    //   this._database.createClub(i);
    // }
    //
    // for (let i = 0; i< 128; i++) {
    //   this._database.createKatana(i);
    // }
    //
    // for (let i = 0; i< 185; i++) {
    //   this._database.createSword(i);
    // }
    //
    // for (let i = 0; i< 142; i++) {
    //   this._database.createScepter(i);
    // }
    //
    // for (let i = 0; i< 122; i++) {
    //   this._database.createShortspear(i);
    // }
    //
    // for (let i = 0; i< 119; i++) {
    //   this._database.createGreataxe(i);
    // }
    //
    // for (let i = 0; i< 178; i++) {
    //   this._database.createGreatclub(i);
    // }
    //
    // for (let i = 0; i< 113; i++) {
    //   this._database.createGreatsword(i);
    // }
    //
    // for (let i = 0; i< 156; i++) {
    //   this._database.createNodachi(i);
    // }
    //
    // for (let i = 0; i< 194; i++) {
    //   this._database.createStaff(i);
    // }
    //
    // for (let i = 0; i< 112; i++) {
    //   this._database.createLongspear(i);
    // }
    //
    // for (let i = 0; i< 151; i++) {
    //   this._database.createLute(i);
    // }
    //
    // for (let i = 0; i< 119; i++) {
    //   this._database.createFlute(i);
    // }
    //
    // for (let i = 0; i< 32; i++) {
    //   this._database.createDrum(i);
    // }
    //
    // for (let i = 0; i< 207; i++) {
    //   this._database.createBow(i);
    // }

  }

  private mineData(data: any) {
    console.log(data);
    let that = this;
    let dataArray = data.data;
    console.log(dataArray);
    for (let i = 0; i < 1; i++) {
      setTimeout(function () {
        let ImageString = dataArray[i][1].split('src')[1].split('=')[1].split('alt')[0].split('"')[1];
        let tempNameString = dataArray[i][2].split('<b>')[1].split('</b>')[0];
        let itemLinkString = dataArray[i][1].split('href="')[1].split('"')[0];
        let imageSrc = 'http://archeagedatabase.net/' + ImageString;
        let itemName = tempNameString;
        let imageName = 'icon_item_' + itemName.toLocaleLowerCase().replace(/ /g, '_').replace('&#39;', "'") + '.jpg';
        let filePath = 'test';
        let id = 2000 + i;
        console.log(dataArray[i][0]);
        that._http.get('http://archeagedatabase.net/us/item/' + dataArray[i][0] + '/').subscribe(
          data => {
            // console.log(data['_body']);
            that._database.downloadFile(imageName, filePath).getDownloadURL().then(function (url) {
                let temperingStr = 'Tempering Available';
                let tempering = '';
                if (data['_body'].indexOf(temperingStr) !== -1) {
                  let first = data['_body'].indexOf(temperingStr);
                  console.log(first, (first + (temperingStr.length)));
                  let str = data['_body'].substring(first, (first + (temperingStr.length)));
                  console.log(str);
                  tempering = str;
                }

                let lootType = data['_body'].split('<br>')[4].split('Loot type: ')[1];
                let lootSource = "";
                let reqLevel = "";
                let dps = "";
                let dpsUpper = "";
                let dpsLower = "";
                if (data['_body'].split('<br>')[5].indexOf('Loot source') !== -1) {
                  lootSource = data['_body'].split('<br>')[5].split('Loot source: ')[1].split('</td>')[0];
                  tempering = data['_body'].split('<br>')[7].split('</td>')[0];
                }
                if (data['_body'].split('<tr>')[5].indexOf('Req. Level') !== -1) {
                  reqLevel = data['_body'].split('<tr>')[5].split('Req. Level: ')[1].split('<br>')[0];
                }
                if (data['_body'].split('<tr>')[13].indexOf('DPS') !== -1) {
                  dps = data['_body'].split('<tr>')[13].split('>')[3].split(' ')[0];
                  dpsUpper = data['_body'].split('<tr>')[13].split('>')[3].split('(')[1].split(' -')[0];
                  dpsLower = data['_body'].split('<tr>')[13].split('>')[3].split(')')[0].split(' -')[1];
                }
                if (data['_body'].split('<br>')[4].indexOf('Tempering') !== -1 ) {
                  tempering = data['_body'].split('<br>')[4].split('</td>')[0];
                } else if (data['_body'].split('<br>')[5].indexOf('Tempering') !== -1) {
                  tempering = data['_body'].split('<br>')[5].split('</td>')[0];
                }
                let pickup = data['_body'].split('<br>')[6].split('</td>')[0];
                if (data['_body'].split('<br>').indexOf('Pickup') !== -1) {
                  console.log(data['_body'].split('<br>').indexOf('Pickup'));
                  let index = data['_body'].split('<br>').indexOf('Pickup');
                  console.log(data['_body'].split('<br>')[index]);
                }
                let salvageable = data['_body'].split('<br>')[7];
                let weaponType = data['_body'].split('<tr>')[8].split('>')[1].split('<')[0];
                let attackSpeed = data['_body'].split('<tr>')[9].split('>')[3].split('<')[0];
                let durability = data['_body'].split('<tr>')[10].split('>')[3].split('<')[0];
                let itemClass = data['_body'].split('<tr>')[3].split('>')[7].split('<')[0];
                let grade = data['_body'].split('<tr>')[3].split('>')[9].split('<')[0];
                let penetrationOrAmputation = data['_body'].split('<tr>')[11].split('>')[1].split('<')[0];
                let chanceText = data['_body'].split('<tr>')[11].split('>')[3].split('<')[0];
                let tuple = {
                  itemClass: itemClass,
                  itemType: 'weapons',
                  id: id,
                  icon: url,
                  grade: grade,
                  name: itemName.replace('&#39;', "'"),
                  lootType: lootType,
                  lootSource: lootSource,
                  requiredLevel: reqLevel,
                  minLevel: dataArray[i][3],
                  itemLevel: dataArray[i][4],
                  pickup: pickup,
                  weaponType: weaponType,
                  attackSpeed: parseInt(attackSpeed, 10),
                  durability: durability,
                  penetrationChance: penetrationOrAmputation === 'Penetration Chance' ? true : false,
                  amputationChance: penetrationOrAmputation === 'Amputation Chance' ? true : false,
                  chanceText: chanceText,
                  dpsLowerText: parseInt(dpsLower, 10),
                  dpsUpperText: parseInt(dpsUpper, 10),
                  dps: parseFloat(dps),
                  attributes: {
                    magicAttack: 0,
                    agility: dataArray[i][6] === '' ? 0 : parseInt(dataArray[i][6], 10),
                    stamina: dataArray[i][7] === '' ? 0 : parseInt(dataArray[i][7], 10),
                    spirit: dataArray[i][9] === '' ? 0 : parseInt(dataArray[i][9], 10),
                    strength: dataArray[i][5] === '' ? 0 : parseInt(dataArray[i][5], 10),
                    intelligence: dataArray[i][8] === '' ? 0 : parseInt(dataArray[i][8], 10),
                  },
                  maxGrade: 'Mythic',
                  salvageable: salvageable,
                  temper: tempering,
                  lunagemSlots: 0,
                  useEffect: false,
                  comboEffect: true,
                  comboEffectText1: "",
                  comboEffectText2: "",
                  comboEffectStat1: "",
                  comboEffectStat2: "",
                  equipEffect: true,
                  equipEffectText1: '',
                  equipEffectText2: '',
                  equipEffectText3: '',
                  equipEffectStat1: '',
                  setEffect: false,
                  setItems: [],
                  equipmentPoints: 504,
                  price: '4g15s80c',
                  shopPrice: '20s79c',
                  salvageMaterial: [
                    {
                      material: 'Sunlight Archeum Essence',
                      grade: 'basic',
                      gradeIcon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d',
                      className: 'basicGradeColor',
                      lowerLimit: 0,
                      upperLimit: 0,
                      icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Farcheum%2Ficon_item_sunlight_essence.jpg?alt=media&token=764a3994-a235-424d-b23e-69a30dc588ee'
                    }
                  ]
                };
                that.daggerData.push(tuple);
              },
              err =>
                console.log('Can\'t get products. Error code: %s, URL: %s ',  err.status, err.url),
              () => console.log('Product(s) are retrieved')
            );
            });
            // console.log(data['_body']);
            // console.log(data['_body'].split('<tr>'));
        // this.getBase64ImageFromUrl(imageSrc)
        //   .then(result => {
        //     let blob = this.dataURItoBlob(result, 'image/jpeg');
        //     console.log(blob);
        //     this._database.uploadFile(blob, filePath, imageName);
        //   })
        //   .catch(err => console.error(err));


      }, 1000);
    }
    console.log(that.daggerData);
  }

  async getBase64ImageFromUrl(imageUrl) {
    let res = await fetch(imageUrl);
    let blob = await res.blob();

    return new Promise((resolve, reject) => {
      let reader  = new FileReader();
      reader.addEventListener('load', function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }

  dataURItoBlob (dataURI, dataTYPE) {
    let binary = atob(dataURI.split(',')[1]), array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: dataTYPE});
  }
}
