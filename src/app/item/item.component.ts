import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArcheageDatabaseService} from "../services/database.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  private itemId: number;
  private item: Object = {};
  private basicColor: Object = {};
  private basicGrade: string;
  private grandGrade: string;
  private rareGrade: string;
  private arcaneGrade: string;
  private heoricGrade: string;
  private uniqueGrade: string;
  private celestialGrade: string;
  private divineGrade: string;
  private epicGrade: string;
  private legendaryGrade: string;
  private mythicGrade: string;
  private grade: string;
  private itemPrice: any;
  private itemShopPrice: any;
  private goldCoinSrc: string;
  private silverCoinSrc: string;
  private copperCoinSrc: string;
  private goldCoinPrice: string;
  private goldCoinShopPrice: string;
  private silverCoinPrice: string;
  private silverCoinShopPrice: string;
  private copperCoinPrice: string;
  private copperCoinShopPrice: string;
  private grandCoeff: number;
  private rareCoeff: number;
  private arcaneCoeff: number;
  private heoricCoeff: number;
  private uniqueCoeff: number;
  private celestialCoeff: number;
  private divineCoeff: number;
  private epicCoeff: number;
  private legendaryCoeff: number;
  private mythicCoeff: number;
  private itemDPS: number;
  private itemEquipmentPoints: number;
  private lunagem: number;
  private lunagemSrc: string;
  private grades: Array<Object>;
  private itemInfoGrade: Object;
  private itemDPSLowerCoeff: number;
  private itemDPSUpperCoeff: number;
  private materialUpperLimit: any;
  private materialLowerLimit: any;
  private materialSalvageCount: any;
  private itemDurability: string;
  private itemAgility: number;
  private itemStamina: number;
  private itemStrength: number;
  private itemIntelligence: number;
  private itemSpirit: number;
  private itemMagicAttack: number;
  private attributeCount: number;

  constructor(private route: ActivatedRoute, private _database: ArcheageDatabaseService, private router: Router) {
    let that = this;
    that.basicGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_basic.png?alt=media&token=9b501433-fa1a-48bc-bbc1-6d4cd163733d';
    that.grandGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_grand.png?alt=media&token=564ea674-24c8-459c-befe-6f5855108b61';
    that.rareGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_rare.png?alt=media&token=f2e2869e-3fbb-46b2-b746-e3ee158da55c';
    that.arcaneGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_arcane.png?alt=media&token=01bc25bb-ef3b-487f-9072-31cb696dbbe7';
    that.heoricGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_heoric.png?alt=media&token=eb4fe0cf-83a8-49b9-9e86-ab8e4423a8cf';
    that.uniqueGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_unique.png?alt=media&token=06e78ce9-5191-4af9-b21d-ac6c8df8eae2';
    that.celestialGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_celestrial.png?alt=media&token=f6449572-5d24-4677-b5e2-beb7c0060e31';
    that.divineGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_divine.png?alt=media&token=2dc54a41-d516-4b40-a858-95e825d14d3f';
    that.epicGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_epic.png?alt=media&token=8a4d89a9-1059-4d74-a350-878775396814';
    that.legendaryGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_legendary.png?alt=media&token=bcf6f04c-cc95-4992-87ef-a0618dc91b74';
    that.mythicGrade = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fitem-grades%2Fitem_icon_grade_mythic.png?alt=media&token=5297d5ce-536c-42de-aee8-e3f05459ba82';
    that.goldCoinSrc = "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fcoins%2Fitem_icon_gold_coin.png?alt=media&token=e1297c73-a780-46bf-838d-18b6a8d352ad";
    that.silverCoinSrc = "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fcoins%2Fitem_icon_silver_coin.png?alt=media&token=77a34433-8995-41ae-84a8-c29ef0a5223e";
    that.copperCoinSrc = "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fcoins%2Fitem_icon_copper_coin.png?alt=media&token=b14a7114-c770-4a1a-8301-cd884e66a675";
    that.grade = that.basicGrade;
    that.grandCoeff = 1.04989550679206;
    that.rareCoeff = 1.09979101358412;
    that. arcaneCoeff = 1.14994775339603;
    that.heoricCoeff = 1.19984326018809;
    that.uniqueCoeff = 1.25;
    that.celestialCoeff = 1.34979101358412;
    that.divineCoeff = 1.5;
    that.epicCoeff = 1.64994775339603;
    that.legendaryCoeff = 1.79989550679206;
    that.mythicCoeff = 2;
    that.attributeCount = 0;
    that.lunagemSrc = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Flunagem%2Fmana-stone-socket.png?alt=media&token=0211ce42-e30d-4002-a367-ad0d4e43363b';

    that.route.params.subscribe(matrixParams => {
      that.itemId = matrixParams["itemId"];
    });

    that.item = {};
    that.item = that._database.getItem(that.itemId);

    that.itemPrice = that.item["price"];
    that.itemShopPrice = that.item["shopPrice"];
    that.goldCoinPrice = that.itemPrice.split('g')[0];
    let tempSilverPrice = that.itemPrice.split('s');
    that.silverCoinPrice = tempSilverPrice[0].split('g')[1];
    let tempCopperPrice1 = that.itemPrice.split('c');
    let tempCopperPrice2 = tempCopperPrice1[0].split('s');
    that.copperCoinPrice = tempCopperPrice2[1];
    if (that.item["shopPrice"].indexOf('g') >= 0) {
      that.goldCoinShopPrice = that.itemShopPrice.split('g')[0];
      let tempSilverShopPrice = that.itemShopPrice.split('s');
      that.silverCoinShopPrice = tempSilverShopPrice[0].split('g')[1];
      let tempCopperShopPrice1 = that.itemShopPrice.split('c');
      let tempCopperShopPrice2 = tempCopperShopPrice1[0].split('s');
      that.copperCoinShopPrice = tempCopperShopPrice2[1];
    }
    else {
      that.silverCoinShopPrice = that.itemShopPrice.split('s')[0];
      let tempCopperShopPrice1 = that.itemShopPrice.split('c');
      let tempCopperShopPrice2 = tempCopperShopPrice1[0].split('s');
      that.copperCoinShopPrice = tempCopperShopPrice2[1];
    }
    that.itemDPS = that.item['dps'];
    that.itemEquipmentPoints = that.item['equipmentPoints'];
    that.lunagem = that.item['lunagemSlots'];
    that.itemDurability = that.item['durability'];
    that.basicColor = {
        name: 'Basic',
        className: 'basicGradeColor'
    };

    that.grades = [
      {
        name: 'Basic',
        className: 'basicGradeColorInfoBox'
      },
      {
        name: 'Grand',
        className: 'grandGradeColor'
      },
      {
        name: 'Rare',
        className: 'rareGradeColor'
      },
      {
        name: 'Arcane',
        className: 'arcaneGradeColor'
      },
      {
        name: 'Heroic',
        className: 'heroicGradeColor'
      },
      {
        name: 'Unique',
        className: 'uniqueGradeColor'
      },
      {
        name: 'Celestial',
        className: 'celestialGradeColor'
      },
      {
        name: 'Divine',
        className: 'divineGradeColor'
      },
      {
        name: 'Epic',
        className: 'epicGradeColor'
      },
      {
        name: 'Legendary',
        className: 'legendaryGradeColor'
      },
      {
        name: 'Mythic',
        className: 'mythicGradeColor'
      }
    ];

    that.itemInfoGrade = that.basicColor;
    that.itemDPSLowerCoeff = that.item['dpsLowerText'];
    that.itemDPSUpperCoeff = that.item['dpsUpperText'];
    that.itemAgility= that.item['attributes']['agility'];
    that.itemStamina = that.item['attributes']['stamina'];
    that.itemStrength = that.item['attributes']['strength'];
    that.itemIntelligence = that.item['attributes']['intelligence'];
    that.itemSpirit = that.item['attributes']['spirit'];
    that.itemMagicAttack = that.item['attributes']['magicAttack'];
    if (that.item['salvageMaterial'] != null) {
      for (let i = 0; i < that.item['salvageMaterial'].length; i++) {
        if (that.item['salvageMaterial'][i].upperLimit !== false) {
          that.materialLowerLimit = that.item['salvageMaterial'][i].lowerLimit;
          that.materialUpperLimit = that.item['salvageMaterial'][i].upperLimit;
        }

        if (that.item['salvageMaterial'][i].salvageCount !== false) {
          that.materialSalvageCount = that.item['salvageMaterial'][i].salvageCount;
        }
      }
    }
    if (that.item['attributes']['agility'] > 0) {
      that.attributeCount +=1;
    }
    if (that.item['attributes']['stamina'] > 0) {
      that.attributeCount +=1;
    }
    if (that.item['attributes']['strength'] > 0) {
      that.attributeCount +=1;
    }
    if (that.item['attributes']['intelligence'] > 0) {
      that.attributeCount +=1;
    }
    if (that.item['attributes']['spirit'] > 0) {
      that.attributeCount +=1;
    }
    if (that.item['attributes']['magicAttack'] > 0) {
      that.attributeCount +=1;
    }
  }

  onItemPage(itemId: any) {
    console.log(itemId);
    this.router.navigate(['item', itemId], { relativeTo: this.route });
    // this.router.navigate(['/item', itemId], { relativeTo: this.route });
    // window.location.href = "/item/" + itemId;
  }

  changeGrade (gradeText) {
    let that = this;
    switch (gradeText) {
      case 'Basic':
        console.log(that.attributeCount);
        that.grade = that.basicGrade;
        that.itemDPS = that.item['dps'];
        that.lunagem = that.item['lunagemSlots'];
        that.itemInfoGrade = that.basicColor;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'])*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText']));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText']));
        that.itemDurability = "130/130";
        for (let i = 0; i <that.item['salvageMaterial'].length; i++) {
          if (that.item['salvageMaterial'][i].upperLimit !== false) {
            that.materialLowerLimit = that.item['salvageMaterial'][i].lowerLimit;
            that.materialUpperLimit = that.item['salvageMaterial'][i].upperLimit;
          }
        }
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility= that.item['attributes']['agility'];
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        console.log(that.itemAgility);
        break;
      case 'Grand':
        that.grade = that.grandGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.grandCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.grandCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.grandCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.grandCoeff));
        that.lunagem = 1;
        that.itemInfoGrade = that.grades[1];
        that.materialLowerLimit =+ 1;
        that.materialUpperLimit =+ 3;
        that.itemDurability = "136/136";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 5;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        console.log(that.itemAgility);
        break;
      case 'Rare':
        that.grade = that.rareGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.rareCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.rareCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.rareCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.rareCoeff));
        that.lunagem = 2;
        that.itemInfoGrade = that.grades[2];
        that.materialLowerLimit =+ 1;
        that.materialUpperLimit =+ 3;
        that.itemDurability = "142/142";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 10;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
      case 'Arcane':
        that.grade = that.arcaneGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.arcaneCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.arcaneCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.arcaneCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.arcaneCoeff));
        that.lunagem = 3;
        that.itemInfoGrade = that.grades[3];
        that.materialLowerLimit =+ 2;
        that.materialUpperLimit =+ 4;
        that.itemDurability = "147/147";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 14;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
      case 'Heroic':
        that.grade = that.heoricGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.heoricCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.heoricCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.heoricCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.heoricCoeff));
        that.lunagem = 4;
        that.itemInfoGrade = that.grades[4];
        that.materialLowerLimit =+ 2;
        that.materialUpperLimit =+ 4;
        that.itemDurability = "152/152";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 19;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
      case 'Unique':
        that.grade = that.uniqueGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.uniqueCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.uniqueCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.uniqueCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.uniqueCoeff));
        that.lunagem = 5;
        that.itemInfoGrade = that.grades[5];
        that.materialLowerLimit =+ 4;
        that.materialUpperLimit =+ 6;
        that.itemDurability = "156/156";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 24;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
      case 'Celestial':
        that.grade = that.celestialGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.celestialCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.celestialCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.celestialCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.celestialCoeff));
        that.lunagem = 6;
        that.itemInfoGrade = that.grades[6];
        that.materialLowerLimit =+ 4;
        that.materialUpperLimit =+ 6;
        that.itemDurability = "159/159";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 30;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
      case 'Divine':
        that.grade = that.divineGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.divineCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.divineCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.divineCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.divineCoeff));
        that.lunagem = 7;
        that.itemInfoGrade = that.grades[7];
        that.materialLowerLimit =+ 6;
        that.materialUpperLimit =+ 8;
        that.itemDurability = "161/161";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 36;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
      case 'Epic':
        that.grade = that.epicGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.epicCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.epicCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.epicCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.epicCoeff));
        that.lunagem = 7;
        that.itemInfoGrade = that.grades[8];
        that.materialLowerLimit =+ 6;
        that.materialUpperLimit =+ 8;
        that.itemDurability = "163/163";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 42;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
      case 'Legendary':
        that.grade = that.legendaryGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.legendaryCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.legendaryCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.legendaryCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.legendaryCoeff));
        that.lunagem = 7;
        that.itemInfoGrade = that.grades[9];
        that.materialLowerLimit =+ 8;
        that.materialUpperLimit =+ 10;
        that.itemDurability = "165/165";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 51;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
      case 'Mythic':
        that.grade = that.mythicGrade;
        that.itemDPS = Math.round((that.item['dps'] * that.mythicCoeff)*10)/10;
        that.itemEquipmentPoints = Math.round((that.item['equipmentPoints'] * that.mythicCoeff)*10)/10;
        that.itemDPSLowerCoeff = Math.round((that.item['dpsLowerText'] * that.mythicCoeff));
        that.itemDPSUpperCoeff = Math.round((that.item['dpsUpperText'] * that.mythicCoeff));
        that.lunagem = 7;
        that.itemInfoGrade = that.grades[10];
        that.materialLowerLimit =+ 8;
        that.materialUpperLimit =+ 10;
        that.itemDurability = "165/165";
        if (that.attributeCount === 1) {
          if (that.item['itemLevel'] === 63) {
            if (that.item['attributes']['agility'] > 0) {
              that.itemAgility = that.item['attributes']['agility'] + 60;
            }
            else if (that.item['attributes']['strength'] > 0) {

            }
            else if (that.item['attributes']['stamina'] > 0) {

            }
            else if (that.item['attributes']['spirit'] > 0) {

            }
            else if (that.item['attributes']['intelligence'] > 0) {

            }
            else if (that.item['attributes']['magicAttack'] > 0) {

            }
          }
        }
        else if (that.attributeCount === 2) {

        }
        else if (that.attributeCount === 3) {

        }
        else if (that.attributeCount === 4) {

        }
        else if (that.attributeCount === 5) {

        }
        else {

        }
        break;
    }
  }

  range = (value) => {
    let a = [];
    for(let i = 0; i < value; ++i) {
      a.push(i+1)
    }
    return a;
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
      items.push(i);
    }
    return items;
  }

}
