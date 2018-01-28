import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GearCalculatorService {
  public playerBuffs$: EventEmitter<any>;
  public playerLevel$: EventEmitter<any>;
  private playerBuffs: Array<Object> = [];

  constructor() {
    this.playerBuffs$ = new EventEmitter();
    this.playerLevel$ = new EventEmitter();
  }

  addPlayerBuff(buff, lastBuff) {
    this.playerBuffs.splice(this.playerBuffs.indexOf(lastBuff), 1);
    this.playerBuffs.push(buff);
    this.playerBuffs$.emit(this.playerBuffs);
  }

  removePlayerBff(buff) {
    this.playerBuffs.splice(this.playerBuffs.indexOf(buff), 1);
    this.playerBuffs$.emit(this.playerBuffs);
  }

  changePlayerLevel(level: number) {
    this.playerLevel$.emit(level);
  }

}
