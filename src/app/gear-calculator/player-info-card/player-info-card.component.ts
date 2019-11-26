import { Component } from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {GearCalculatorService} from '../../services/gear-calculator.service';

@Component({
  selector: 'app-player-info-card',
  templateUrl: './player-info-card.component.html',
  styleUrls: ['./player-info-card.component.css']
})
export class PlayerInfoCardComponent {

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
  private health: number;
  private mana: number;
  private playerTitle: Object = {};


  constructor(private _modalService: ModalService, private _gearCalculatorService: GearCalculatorService) {
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
    this.health = 10246;
    this.mana = 7496;

    this._modalService.playerTitle$.subscribe((title) => {
      this.playerTitle = title;
    });

    this._modalService.statMigration.subscribe((stats) => {
      console.log(stats);
      this.agility = stats[0].value;
      this.intelligence = stats[1].value;
      this.spirit = stats[2].value;
      this.stamina = stats[3].value;
      this.strength = stats[4].value;

      this.meleeAttack = this.strength / 5;
      this.rangedAttack = this.agility / 5;
      this.magicAttack = this.intelligence / 5;
      this.healingPower = this.spirit  / 5;
    });
  }

  updatePlayerLevel(level) {
    if (level < 1) {
      level = 1;
    } else if (level > 55) {
      level = 55;
    }
    this._gearCalculatorService.changePlayerLevel(level);
  }

  openTitleModal() {
    this._modalService.openTitleModal();
  }

  openStatMigrationModal() {
    this._modalService.openStatMigrationModal();
  }
}
