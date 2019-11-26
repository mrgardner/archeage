import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {
  public titleModal$: EventEmitter<any>;
  public statMigrationModal$: EventEmitter<any>;
  public statMigration: EventEmitter<any>;
  public playerTitle$: EventEmitter<any>;

  constructor() {
    this.titleModal$ = new EventEmitter();
    this.statMigrationModal$ = new EventEmitter();
    this.statMigration = new EventEmitter();
    this.playerTitle$ = new EventEmitter();
  }

  openTitleModal() {
    this.titleModal$.emit(true);
  }

  closeTitleModal() {
    this.titleModal$.emit(false);
  }

  openStatMigrationModal() {
    this.statMigrationModal$.emit(true);
  }

  closeStatMigrationModal() {
    this.statMigrationModal$.emit(false);
  }

  setPlayerTitle(title) {
    this.playerTitle$.emit(title);
  }

  setStats(stats) {
    this.statMigration.emit(stats);
  }
}
