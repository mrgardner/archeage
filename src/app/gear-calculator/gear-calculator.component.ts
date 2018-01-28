import { Component } from '@angular/core';
import {ModalService} from '../services/modal.service';
import {GearCalculatorService} from '../services/gear-calculator.service';

@Component({
  selector: 'app-gear-calculator',
  templateUrl: './gear-calculator.component.html',
  styleUrls: ['./gear-calculator.component.css']
})
export class GearCalculatorComponent {

  private itemsSlots: Array<Object> = [];
  private menuItems: Array<Object> = [];
  private playerLevel: number;
  private healthBar: string;
  private health: number;
  private mana: number;
  private playerBuffOverlay: Object = {};
  private playerBuffs: Array<Object> = [];

  constructor(private _modalService: ModalService, private _gearCalculatorService: GearCalculatorService) {
    this.playerLevel = 55;
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

    this._gearCalculatorService.playerBuffs$.subscribe((buffs) => {
      this.playerBuffs = buffs;
    });

    this._gearCalculatorService.playerLevel$.subscribe((level) => {
      this.playerLevel = level;
    });
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
}
