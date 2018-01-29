import { Component } from '@angular/core';
import {GearCalculatorService} from '../../services/gear-calculator.service';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css']
})
export class HealthBarComponent {

  private health: number;
  private healthBar: string;
  private mana: number;
  private playerLevel: number;

  constructor(private _gearCalculatorService: GearCalculatorService) {
    this.health = 10246;
    this.healthBar = 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/gear-calculator%2Fmisc%2Fhealth.png?alt=media&token=61a03500-d07c-4c8c-8268-2507de027d03';
    this.mana = 7496;
    this.playerLevel = 55;

    this._gearCalculatorService.playerLevel$.subscribe((level) => {
      this.playerLevel = level;
    });
  }
}
