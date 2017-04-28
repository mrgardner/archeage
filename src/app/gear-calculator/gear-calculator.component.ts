import { Component, OnInit } from '@angular/core';
import {ArcheageDatabaseService} from "../services/database.service";

@Component({
  selector: 'app-gear-calculator',
  templateUrl: './gear-calculator.component.html',
  styleUrls: ['./gear-calculator.component.css']
})
export class GearCalculatorComponent implements OnInit {

  private itemsSlots: Array<Object> = [];
  private menuItems: Array<Object> = [];
  private playerLevel: number;
  private meleeAttack: number;
  private rangedAttack: number;
  private magicAttack: number;
  private healingPower: number;
  private physicalDefense: number;
  private magicDefense: number;
  private equipPoints: number;
  private strength: number;
  private agility: number;
  private stamina: number;
  private intelligence: number;
  private spirit: number;
  private moveSpeed: number;
  private castTime: number;
  private attackSpeed: number;
  private healthBar: string;
  private health: number;
  private mana: number;
  private showTitleModal: boolean = false;
  private showAttributeModal: boolean = false;
  private hasTitleData: boolean = false;
  private titles: Array<Object> = [];
  private playerBuffs: Array<Object> = [];
  private playerTitle: Object = {};
  private playerBuffOverlay: Object = {};
  private agilityStatIcon: string;
  private intelligenceStatIcon: string;
  private spiritStatIcon: string;
  private staminaStatIcon: string;
  private strengthStatIcon: string;
  private agilityMigrationStat: number;
  private intelligenceMigrationStat: number;
  private spiritMigrationStat: number;
  private staminaMigrationStat: number;
  private strengthMigrationStat: number;
  private agilityDifferenceMigrationStat: number;
  private intelligenceDifferenceMigrationStat: number;
  private spiritDifferenceMigrationStat: number;
  private staminaDifferenceMigrationStat: number;
  private strengthDifferenceMigrationStat: number;
  private applicableStats: number;
  private appliedStats: number;
  private pendingPoints: number;

  constructor(private _database: ArcheageDatabaseService) {
    this.playerLevel = 55;
    this.strength = 158;
    this.agility = 158;
    this.stamina = 158;
    this.intelligence = 158;
    this.spirit = 158;
    this.meleeAttack = this.strength / 5;
    this.rangedAttack = this.agility / 5;
    this.magicAttack = this.intelligence / 5;
    this.healingPower = this.spirit  / 5;
    this.physicalDefense = 0;
    this.magicDefense = this.spirit;
    this.equipPoints = 0;
    this.moveSpeed = 5.4;
    this.castTime = 100.0;
    this.attackSpeed = 100.0;
    this.itemsSlots = [
      {
        slotName: 'costume',
        float: 'middle',
        class: 'costumeSection',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fcostume.png?alt=media&token=ae196425-321b-469b-baf4-2c94a091f987'
      },
      {
        slotName: 'cap',
        float: 'left',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fcap.png?alt=media&token=3b25ee60-2164-47c2-95c4-e63e777518dc'
      },
      {
        slotName: 'chest',
        float: 'left',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fchest.png?alt=media&token=85c2c8b7-a412-466d-85ac-b29055fcac34'
      },
      {
        slotName: 'belt',
        float: 'left',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fbelt.png?alt=media&token=917c82d8-cc61-4fb9-98b2-f2fb2d1abd88'
      },
      {
        slotName: 'guards',
        float: 'left',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fguards.png?alt=media&token=7e6ea656-af19-4efb-86b9-e47147e0f632'
      },
      {
        slotName: 'fists',
        float: 'left',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Ffists.png?alt=media&token=bffa1260-3312-431e-98cb-1468de95d4d6'
      },
      {
        slotName: 'cloak',
        float: 'left',
        class: 'slotItem cloakItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fcloak.png?alt=media&token=b24dbf91-6c21-45d3-8d4f-41c54266d808'
      },
      {
        slotName: 'pants',
        float: 'left',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fpants.png?alt=media&token=d278588c-2a1e-4fc0-bb3a-c692f8305a3a'
      },
      {
        slotName: 'boots',
        float: 'left',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fboots.png?alt=media&token=032e57b3-63b1-4086-8948-d22843333f96'
      },
      {
        slotName: 'necklace',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fnecklace.png?alt=media&token=ba1c1054-0708-4879-b8ec-af25a5aa267e'
      },
      {
        slotName: 'earring',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fearring.png?alt=media&token=168266a1-e53e-43cb-bab8-8b667d165caa'
      },
      {
        slotName: 'earring',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fearring.png?alt=media&token=168266a1-e53e-43cb-bab8-8b667d165caa'
      },
      {
        slotName: 'ring',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fring.png?alt=media&token=a3c222a1-9d2d-4634-8224-71e304e57a65'
      },
      {
        slotName: 'ring',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fring.png?alt=media&token=a3c222a1-9d2d-4634-8224-71e304e57a65'
      },
      {
        slotName: 'main-weapon',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fmain-hand-weapon.png?alt=media&token=7fb7c1c3-1e1f-45c2-8b0f-61151061b245'
      },
      {
        slotName: 'off-hand-weapon',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Foff_hand_weapon.png?alt=media&token=c49cc749-c42b-49d1-acda-14f82ada7f79'
      },
      {
        slotName: 'bow',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fbow.png?alt=media&token=adcd71da-09ee-41ab-b57b-ad656660732c'
      },
      {
        slotName: 'lute',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Flute.png?alt=media&token=613deb6f-3bea-49b0-939f-2023f05741f1'
      },
      {
        slotName: 'back slot',
        float: 'right',
        class: 'slotItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fback_slot.png?alt=media&token=6e20f422-c6a5-4ec5-844a-1c93d6624930'
      },
      {
        slotName: 'undergarments',
        float: 'left',
        class: 'slotItem underwearItem',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fitem-slots%2Fundergarments.png?alt=media&token=8d140254-f5b3-41f6-ad32-42db10d49516'
      }
    ];
    this.health = 10246;
    this.mana = 7496;
    this.menuItems = [
      {
        name: 'Buffs',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fmisc%2Fbuff_off.png?alt=media&token=5d3c9da7-2a8a-4928-a98f-769277766923'
      },
      {
        name: 'Skills',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fmisc%2Fsw_off.png?alt=media&token=fcc81498-eb01-4a2e-b04c-df5b9e2935ce'
      },
      {
        name: 'Sets',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fmisc%2Fset_off.png?alt=media&token=82e8b80d-25c6-45c9-94fe-12a91b2c9635'
      }
    ];
    this.healthBar = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fmisc%2Fhealth.png?alt=media&token=61a03500-d07c-4c8c-8268-2507de027d03';
    this.titles = this._database.getAllTitles();
    this.agilityStatIcon = "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_agility.png?alt=media&token=517f9389-6e08-4ac2-9121-24c3748486fd";
    this.intelligenceStatIcon = "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_intelligence.png?alt=media&token=4a145d7e-2a0f-4159-a424-34221445ca25";
    this.spiritStatIcon = "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_spirit.png?alt=media&token=33090ced-9082-4192-834b-f06f1a563c11";
    this.staminaStatIcon = "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_stamina.png?alt=media&token=2edecd40-a246-4af7-8436-51db3ea731d0";
    this.strengthStatIcon = "https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_strength.png?alt=media&token=b33efacf-379e-4717-aa6e-1310416c5d25";
    this.agilityMigrationStat = 158;
    this.intelligenceMigrationStat = 158;
    this.spiritMigrationStat = 158;
    this.staminaMigrationStat = 158;
    this.strengthMigrationStat = 158;
    this.agilityDifferenceMigrationStat = 0;
    this.strengthDifferenceMigrationStat = 0;
    this.staminaDifferenceMigrationStat = 0;
    this.spiritDifferenceMigrationStat = 0;
    this.intelligenceDifferenceMigrationStat = 0;
    this.applicableStats = 0;
    this.appliedStats = 0;
    this.pendingPoints = 0;
  }

  ngOnInit() {
  }

  openTitleModal() {
    this.showTitleModal = true;
    this.hasTitleData = true;
  }

  closeTitleModal() {
    this.showTitleModal = false;
  }

  openAttributeModal() {
    let that = this;
    that.showAttributeModal = true;
    setTimeout(function () {
      document.getElementById('strengthId').style.color = 'blue';
      document.getElementById('strengthId').innerHTML = '+' + that.strengthDifferenceMigrationStat;
      document.getElementById('agilityId').style.color = 'blue';
      document.getElementById('agilityId').innerHTML = '+' + that.agilityDifferenceMigrationStat;
      document.getElementById('staminaId').style.color = 'blue';
      document.getElementById('staminaId').innerHTML = '+' + that.staminaDifferenceMigrationStat;
      document.getElementById('spiritId').style.color = 'blue';
      document.getElementById('spiritId').innerHTML = '+' + that.spiritDifferenceMigrationStat;
      document.getElementById('intelligenceId').style.color = 'blue';
      document.getElementById('intelligenceId').innerHTML = '+' + that.intelligenceDifferenceMigrationStat;
    },10);
  }

  closeAttributeModal() {
    this.showAttributeModal = false;
  }

  setNewTitle(title: string) {
    this.playerTitle = title;
    this.showTitleModal = false;
    this.playerBuffs.splice(this.playerBuffs.indexOf(this.playerTitle), 1);
    this.playerBuffs.push(title);
  }

  resetTitle() {
    this.playerTitle = {};
    this.playerBuffs.splice(this.playerBuffs.indexOf(this.playerTitle), 1);
    this.showTitleModal = false;
  }

  showBuffOverlay(buff: Object) {
    let newStylednumbers = buff['description'].replace(/([+][0-9]+,[0-9]+)|([+][0-9]+%)|([+][0-9]+)/g, '<span style="color: orange;">$1 $2 $3</span>');
    this.playerBuffOverlay['description'] = newStylednumbers;
    this.playerBuffOverlay = buff;
    setTimeout(function () {
      document.getElementById('buffDesc').innerHTML = newStylednumbers;
    },10);
  }

  hideBuffOverlay() {
    this.playerBuffOverlay = {};
  }

  checkPlayerLevel() {
    if (this.playerLevel < 1) {
      this.playerLevel = 1;
    }
    if (this.playerLevel > 55) {
      this.playerLevel = 55;
    }
  }

  strengthMigrationChange() {
    let tempDifference1 = this.strengthDifferenceMigrationStat;
    let tempDifference2;
    let temp1 = this.strengthMigrationStat - 158;
    // if (this.strengthMigrationStat < 0) {
    //   this.strengthMigrationStat = 0;
    // }
    // if (this.strengthMigrationStat > 458) {
    //   this.strengthMigrationStat = 458;
    // }
    if (this.strengthMigrationStat >= 158 && this.applicableStats >= 0) {
      this.strengthDifferenceMigrationStat = 158 - this.strengthMigrationStat;
      if (this.applicableStats >= 300) {
        if ((temp1) > tempDifference1) {
          let temp2 = Math.abs(tempDifference1) - Math.abs(this.strengthMigrationStat - 158);
          this.strengthDifferenceMigrationStat = temp1;
          if (this.strengthDifferenceMigrationStat >= 0) {
            this.applicableStats -= Math.abs(temp2);
            this.pendingPoints += Math.abs(temp2);
          }
          else {
            this.applicableStats += temp2;
          }
        }
        else {
          this.applicableStats = 300;
          this.strengthMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        console.log('HA HA');
        if (this.strengthMigrationStat > this.applicableStats && this.applicableStats > 0) {
          this.strengthMigrationStat = this.applicableStats;
          this.strengthDifferenceMigrationStat = this.applicableStats;
          this.applicableStats = 0;
        }
        else if (this.pendingPoints === 300) {
          console.log('WOOT');
          this.strengthMigrationStat = 158;
          this.applicableStats = 0;
          this.strengthDifferenceMigrationStat = this.applicableStats;
        }
        else {
          this.strengthDifferenceMigrationStat = this.strengthMigrationStat - 158;
          tempDifference2 = this.strengthDifferenceMigrationStat;
          if (this.strengthDifferenceMigrationStat >= 0) {
            this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
            this.pendingPoints += Math.abs(Math.abs(tempDifference1) -  Math.abs(tempDifference2));
          }
          else {
            this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
        }
      }
      document.getElementById('strengthId').innerHTML = '+' + Math.abs(this.strengthDifferenceMigrationStat);
      console.log(this.pendingPoints);
      document.getElementById('strengthId').style.color = 'blue';
    }
    else if (this.strengthMigrationStat < 158 && this.applicableStats >= 0) {
      if (this.applicableStats >= 300) {
        console.log(tempDifference1);
        console.log(this.strengthMigrationStat - 158);
        if ((this.strengthMigrationStat - 158) > tempDifference1) {
          let temp = Math.abs(tempDifference1) - Math.abs(this.strengthMigrationStat - 158);
          this.strengthDifferenceMigrationStat += temp;
          if (this.strengthDifferenceMigrationStat >= 0) {
            this.applicableStats += temp;
          }
          else {
            this.applicableStats -= temp;
          }
          document.getElementById('strengthId').innerHTML = '' + this.strengthDifferenceMigrationStat;
        }
        else {
          this.applicableStats = 300;
          this.strengthMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        if (Math.abs(this.strengthMigrationStat - 158) >= Math.abs(this.applicableStats - 300)) {
          this.strengthDifferenceMigrationStat = (Math.abs(this.applicableStats - 300) * -1);
          this.strengthMigrationStat = Math.abs(158 - Math.abs(this.applicableStats - 300));
          this.applicableStats += Math.abs(this.applicableStats - 300);
          document.getElementById('strengthId').style.color = 'red';
          document.getElementById('strengthId').innerHTML = '' + this.strengthDifferenceMigrationStat;
        }
        else if (this.pendingPoints === 300) {
          this.strengthMigrationStat = 158;
          this.applicableStats = 0;
          this.strengthDifferenceMigrationStat = this.applicableStats;
          document.getElementById('strengthId').style.color = 'blue';
          document.getElementById('strengthId').innerHTML = '+' + this.strengthDifferenceMigrationStat;
        }
        else {
          console.log('HA');
          this.strengthDifferenceMigrationStat = this.strengthMigrationStat - 158;
          tempDifference2 = this.strengthDifferenceMigrationStat;
          if (this.strengthDifferenceMigrationStat >= 0) {
            this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
          else {
            this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
          document.getElementById('strengthId').style.color = 'red';
          document.getElementById('strengthId').innerHTML = '' + this.strengthDifferenceMigrationStat;
        }
      }
      this.applicableStats = Math.abs(this.applicableStats);
      this.pendingPoints = Math.abs(this.pendingPoints);
      console.log(this.pendingPoints);
    }
  }

  agilityMigrationChange() {
    let tempDifference1 = this.agilityDifferenceMigrationStat;
    let tempDifference2;
    let temp1 = this.agilityMigrationStat - 158;
    if (this.agilityMigrationStat < 0) {
      this.agilityMigrationStat = 0;
    }
    if (this.agilityMigrationStat > 458) {
      this.agilityMigrationStat = 458;
    }
    if (this.agilityMigrationStat >= 158 && this.applicableStats > 0) {
      this.agilityDifferenceMigrationStat = 158 - this.agilityMigrationStat;
      if (this.applicableStats >= 300) {
        if ((temp1) > tempDifference1) {
          let temp2 = Math.abs(tempDifference1) - Math.abs(this.agilityMigrationStat - 158);
          this.agilityDifferenceMigrationStat = temp1;
          if (this.agilityDifferenceMigrationStat >= 0) {
            console.log('or this one?');
            this.applicableStats -= Math.abs(temp2);
            this.pendingPoints += Math.abs(temp2);
          }
          else {
            console.log('this one?');
            this.applicableStats += temp2;
          }
        }
        else {
          console.log('could be this one too');
          this.applicableStats = 300;
          this.agilityMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        this.agilityDifferenceMigrationStat = this.agilityMigrationStat - 158;
        tempDifference2 = this.agilityDifferenceMigrationStat;
        if (this.agilityDifferenceMigrationStat >= 0) {
          console.log('HELLLO????');
          this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          this.pendingPoints += Math.abs(Math.abs(tempDifference1) -  Math.abs(tempDifference2));
        }
        else {
          this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
        }
      }
      document.getElementById('agilityId').innerHTML = '+' + Math.abs(this.agilityDifferenceMigrationStat);
      document.getElementById('agilityId').style.color = 'blue';
    }
    if (this.agilityMigrationStat < 158 && this.applicableStats >= 0) {
      if (this.applicableStats >= 300) {
        console.log(tempDifference1);
        console.log(this.agilityMigrationStat - 158);
        if ((this.agilityMigrationStat - 158) > tempDifference1) {
          let temp = Math.abs(tempDifference1) - Math.abs(this.agilityMigrationStat - 158);
          this.agilityDifferenceMigrationStat += temp;
          if (this.agilityDifferenceMigrationStat >= 0) {
            this.applicableStats += temp;
          }
          else {
            this.applicableStats -= temp;
          }
          document.getElementById('agilityId').innerHTML = '' + this.agilityDifferenceMigrationStat;
        }
        else {
          this.applicableStats = 300;
          this.agilityMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        if (Math.abs(this.agilityMigrationStat - 158) >= Math.abs(this.applicableStats - 300)) {
          this.agilityDifferenceMigrationStat = (Math.abs(this.applicableStats - 300) * -1);
          this.agilityMigrationStat = Math.abs(158 - Math.abs(this.applicableStats - 300));
          this.applicableStats += Math.abs(this.applicableStats - 300);
        }
        else {
          this.agilityDifferenceMigrationStat = this.agilityMigrationStat - 158;
          tempDifference2 = this.agilityDifferenceMigrationStat;
          if (this.agilityDifferenceMigrationStat >= 0) {
            this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
          else {
            this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
        }
        document.getElementById('agilityId').style.color = 'red';
        document.getElementById('agilityId').innerHTML = '' + this.agilityDifferenceMigrationStat;
      }
      this.applicableStats = Math.abs(this.applicableStats);
      this.pendingPoints = Math.abs(this.pendingPoints);
    }
    console.log(this.pendingPoints);
  }

  staminaMigrationChange() {
    console.log(this.pendingPoints);
    let tempDifference1 = this.staminaDifferenceMigrationStat;
    let tempDifference2;
    let temp1 = this.staminaMigrationStat - 158;
    if (this.staminaMigrationStat < 0) {
      this.staminaMigrationStat = 0;
    }
    if (this.staminaMigrationStat > 458) {
      this.staminaMigrationStat = 458;
    }
    if (this.staminaMigrationStat >= 158 && this.applicableStats > 0) {
      this.staminaDifferenceMigrationStat = 158 - this.staminaMigrationStat;
      if (this.applicableStats >= 300) {
        if ((temp1) > tempDifference1) {
          let temp2 = Math.abs(tempDifference1) - Math.abs(this.staminaMigrationStat - 158);
          this.staminaDifferenceMigrationStat = temp1;
          if (this.staminaDifferenceMigrationStat >= 0) {
            this.applicableStats -= Math.abs(temp2);
            this.pendingPoints += Math.abs(temp2);
          }
          else {
            this.applicableStats += temp2;
          }
        }
        else {
          this.applicableStats = 300;
          this.staminaMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        this.staminaDifferenceMigrationStat = this.staminaMigrationStat - 158;
        tempDifference2 = this.staminaDifferenceMigrationStat;
        if (this.staminaDifferenceMigrationStat >= 0) {
          this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          this.pendingPoints += Math.abs(Math.abs(tempDifference1) -  Math.abs(tempDifference2));
        }
        else {
          this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
        }
      }
      document.getElementById('staminaId').innerHTML = '+' + Math.abs(this.staminaDifferenceMigrationStat);
      document.getElementById('staminaId').style.color = 'blue';
    }
    if (this.staminaMigrationStat < 158 && this.applicableStats >= 0) {
      if (this.applicableStats >= 300) {
        console.log(tempDifference1);
        console.log(this.staminaMigrationStat - 158);
        if ((this.staminaMigrationStat - 158) > tempDifference1) {
          let temp = Math.abs(tempDifference1) - Math.abs(this.staminaMigrationStat - 158);
          this.staminaDifferenceMigrationStat += temp;
          if (this.staminaDifferenceMigrationStat >= 0) {
            this.applicableStats += temp;
          }
          else {
            this.applicableStats -= temp;
          }
          document.getElementById('staminaId').innerHTML = '' + this.staminaDifferenceMigrationStat;
        }
        else {
          this.applicableStats = 300;
          this.staminaMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        if (Math.abs(this.staminaMigrationStat - 158) >= Math.abs(this.applicableStats - 300)) {
          this.staminaDifferenceMigrationStat = (Math.abs(this.applicableStats - 300) * -1);
          this.staminaMigrationStat = Math.abs(158 - Math.abs(this.applicableStats - 300));
          this.applicableStats += Math.abs(this.applicableStats - 300);
        }
        else {
          this.staminaDifferenceMigrationStat = this.staminaMigrationStat - 158;
          tempDifference2 = this.staminaDifferenceMigrationStat;
          if (this.staminaDifferenceMigrationStat >= 0) {
            this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
          else {
            this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
        }
        document.getElementById('staminaId').style.color = 'red';
        document.getElementById('staminaId').innerHTML = '' + this.staminaDifferenceMigrationStat;
      }
      this.applicableStats = Math.abs(this.applicableStats);
      this.pendingPoints = Math.abs(this.pendingPoints);
    }
    console.log(this.pendingPoints);
  }

  spiritMigrationChange() {
    console.log(this.pendingPoints);
    let tempDifference1 = this.spiritDifferenceMigrationStat;
    let tempDifference2;
    let temp1 = this.spiritMigrationStat - 158;
    if (this.spiritMigrationStat < 0) {
      this.spiritMigrationStat = 0;
    }
    if (this.spiritMigrationStat > 458) {
      this.spiritMigrationStat = 458;
    }
    if (this.spiritMigrationStat >= 158 && this.applicableStats > 0) {
      this.spiritDifferenceMigrationStat = 158 - this.spiritMigrationStat;
      if (this.applicableStats >= 300) {
        if ((temp1) > tempDifference1) {
          let temp2 = Math.abs(tempDifference1) - Math.abs(this.spiritMigrationStat - 158);
          this.spiritDifferenceMigrationStat = temp1;
          if (this.spiritDifferenceMigrationStat >= 0) {
            this.applicableStats -= Math.abs(temp2);
            this.pendingPoints += Math.abs(temp2);
          }
          else {
            this.applicableStats += temp2;
          }
        }
        else {
          this.applicableStats = 300;
          this.spiritMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        this.spiritDifferenceMigrationStat = this.spiritMigrationStat - 158;
        tempDifference2 = this.spiritDifferenceMigrationStat;
        if (this.spiritDifferenceMigrationStat >= 0) {
          console.log('sdsdfsfd');
          this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          console.log(Math.abs(tempDifference1));
          console.log(Math.abs(tempDifference2));
          this.pendingPoints += Math.abs(Math.abs(tempDifference1) -  Math.abs(tempDifference2));
        }
        else {
          this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
        }
      }
      document.getElementById('spiritId').innerHTML = '+' + Math.abs(this.spiritDifferenceMigrationStat);
      document.getElementById('spiritId').style.color = 'blue';
    }
    if (this.spiritMigrationStat < 158 && this.applicableStats >= 0) {
      if (this.applicableStats >= 300) {
        console.log(tempDifference1);
        console.log(this.spiritMigrationStat - 158);
        if ((this.spiritMigrationStat - 158) > tempDifference1) {
          let temp = Math.abs(tempDifference1) - Math.abs(this.spiritMigrationStat - 158);
          this.spiritDifferenceMigrationStat += temp;
          if (this.spiritDifferenceMigrationStat >= 0) {
            this.applicableStats += temp;
          }
          else {
            this.applicableStats -= temp;
          }
          document.getElementById('spiritId').innerHTML = '' + this.spiritDifferenceMigrationStat;
        }
        else {
          this.applicableStats = 300;
          this.spiritMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        if (Math.abs(this.spiritMigrationStat - 158) >= Math.abs(this.applicableStats - 300)) {
          this.spiritDifferenceMigrationStat = (Math.abs(this.applicableStats - 300) * -1);
          this.spiritMigrationStat = Math.abs(158 - Math.abs(this.applicableStats - 300));
          this.applicableStats += Math.abs(this.applicableStats - 300);
        }
        else {
          this.spiritDifferenceMigrationStat = this.spiritMigrationStat - 158;
          tempDifference2 = this.spiritDifferenceMigrationStat;
          if (this.spiritDifferenceMigrationStat >= 0) {
            this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
          else {
            this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
        }
        document.getElementById('spiritId').style.color = 'red';
        document.getElementById('spiritId').innerHTML = '' + this.spiritDifferenceMigrationStat;
      }
      this.applicableStats = Math.abs(this.applicableStats);
      this.pendingPoints = Math.abs(this.pendingPoints);
    }
    console.log(this.pendingPoints);
  }

  intelligenceMigrationChange() {
    let tempDifference1 = this.intelligenceDifferenceMigrationStat;
    let tempDifference2;
    let temp1 = this.intelligenceMigrationStat - 158;
    if (this.intelligenceMigrationStat < 0) {
      this.intelligenceMigrationStat = 0;
    }
    if (this.intelligenceMigrationStat > 458) {
      this.intelligenceMigrationStat = 458;
    }
    if (this.intelligenceMigrationStat >= 158 && this.applicableStats > 0) {
      this.intelligenceDifferenceMigrationStat = 158 - this.intelligenceMigrationStat;
      if (this.applicableStats >= 300) {
        if ((temp1) > tempDifference1) {
          let temp2 = Math.abs(tempDifference1) - Math.abs(this.intelligenceMigrationStat - 158);
          this.intelligenceDifferenceMigrationStat = temp1;
          if (this.intelligenceDifferenceMigrationStat >= 0) {
            this.applicableStats -= Math.abs(temp2);
            this.pendingPoints += Math.abs(temp2);
          }
          else {
            this.applicableStats += temp2;
          }
        }
        else {
          this.applicableStats = 300;
          this.intelligenceMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        this.intelligenceDifferenceMigrationStat = this.intelligenceMigrationStat - 158;
        tempDifference2 = this.intelligenceDifferenceMigrationStat;
        if (this.intelligenceDifferenceMigrationStat >= 0) {
          this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          this.pendingPoints += Math.abs(Math.abs(tempDifference1) -  Math.abs(tempDifference2));
        }
        else {
          this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
        }
      }
      document.getElementById('intelligenceId').innerHTML = '+' + Math.abs(this.intelligenceDifferenceMigrationStat);
      document.getElementById('intelligenceId').style.color = 'blue';
    }
    else if (this.intelligenceMigrationStat < 158 && this.applicableStats >= 0) {
      if (this.applicableStats >= 300) {
        console.log(tempDifference1);
        console.log(this.intelligenceMigrationStat - 158);
        if ((this.intelligenceMigrationStat - 158) > tempDifference1) {
          let temp = Math.abs(tempDifference1) - Math.abs(this.intelligenceMigrationStat - 158);
          this.intelligenceDifferenceMigrationStat += temp;
          if (this.intelligenceDifferenceMigrationStat >= 0) {
            this.applicableStats += temp;
          }
          else {
            this.applicableStats -= temp;
          }
          document.getElementById('intelligenceId').innerHTML = '' + this.intelligenceDifferenceMigrationStat;
        }
        else {
          this.applicableStats = 300;
          this.intelligenceMigrationStat = 158 - Math.abs(tempDifference1);
        }
      }
      else {
        if (Math.abs(this.intelligenceMigrationStat - 158) >= Math.abs(this.applicableStats - 300)) {
          this.intelligenceDifferenceMigrationStat = (Math.abs(this.applicableStats - 300) * -1);
          this.intelligenceMigrationStat = Math.abs(158 - Math.abs(this.applicableStats - 300));
          this.applicableStats += Math.abs(this.applicableStats - 300);
        }
        else {
          this.intelligenceDifferenceMigrationStat = this.intelligenceMigrationStat - 158;
          tempDifference2 = this.intelligenceDifferenceMigrationStat;
          if (this.intelligenceDifferenceMigrationStat >= 0) {
            this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
          else {
            this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
          }
        }
        document.getElementById('intelligenceId').style.color = 'red';
        document.getElementById('intelligenceId').innerHTML = '' + this.intelligenceDifferenceMigrationStat;
      }
      this.applicableStats = Math.abs(this.applicableStats);
    }
    else {
      console.log('HOWDY');
    }
    console.log(this.pendingPoints);
  }

  resetStatAttributes() {
    let that = this;
    setTimeout(function () {
      document.getElementById('strengthId').style.color = 'blue';
      document.getElementById('strengthId').innerHTML = '+' + that.strengthDifferenceMigrationStat;
      document.getElementById('agilityId').style.color = 'blue';
      document.getElementById('agilityId').innerHTML = '+' + that.agilityDifferenceMigrationStat;
      document.getElementById('staminaId').style.color = 'blue';
      document.getElementById('staminaId').innerHTML = '+' + that.staminaDifferenceMigrationStat;
      document.getElementById('spiritId').style.color = 'blue';
      document.getElementById('spiritId').innerHTML = '+' + that.spiritDifferenceMigrationStat;
      document.getElementById('intelligenceId').style.color = 'blue';
      document.getElementById('intelligenceId').innerHTML = '+' + that.intelligenceDifferenceMigrationStat;
    },10);
    this.agilityDifferenceMigrationStat = 0;
    this.intelligenceDifferenceMigrationStat = 0;
    this.spiritDifferenceMigrationStat = 0;
    this.staminaDifferenceMigrationStat = 0;
    this.strengthDifferenceMigrationStat = 0;
    this.agilityMigrationStat = 158;
    this.spiritMigrationStat = 158;
    this.staminaMigrationStat = 158;
    this.intelligenceMigrationStat = 158;
    this.strengthMigrationStat = 158;
    this.applicableStats = 0;
    this.appliedStats = 0;
  }
}
