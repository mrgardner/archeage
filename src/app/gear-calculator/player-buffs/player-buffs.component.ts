import { Component } from '@angular/core';
import {GearCalculatorService} from '../../services/gear-calculator.service';

@Component({
  selector: 'app-player-buffs',
  templateUrl: './player-buffs.component.html',
  styleUrls: ['./player-buffs.component.css']
})
export class PlayerBuffsComponent {

  private playerBuffs: Array<Object> = [];
  private playerBuffOverlay: Object = {};

  constructor(private _gearCalculatorService: GearCalculatorService) {
    this._gearCalculatorService.playerBuffs$.subscribe((buffs) => {
      this.playerBuffs = buffs;
    });
  }

  showBuffOverlay(buff: Object) {
    let newStylednumbers = buff['description'].replace(/([+][0-9]+,[0-9]+)|([+][0-9]+%)|([+][0-9]+)/g, '<span style="color: orange;">$1 $2 $3</span>');
    this.playerBuffOverlay['description'] = newStylednumbers;
    this.playerBuffOverlay = buff;
    setTimeout(function () {
      document.getElementById('buffDesc').innerHTML = newStylednumbers;
    }, 10);
  }

  hideBuffOverlay() {
    this.playerBuffOverlay = {};
  }

}
