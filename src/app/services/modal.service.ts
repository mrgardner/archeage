import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {
  public titleModal$: EventEmitter<any>;
  public playerTitle$: EventEmitter<any>;

  constructor() {
    this.titleModal$ = new EventEmitter();
    this.playerTitle$ = new EventEmitter();
  }

  openModal() {
    this.titleModal$.emit(true);
  }

  closeModal() {
    this.titleModal$.emit(false);
  }

  setPlayerTitle(title) {
    this.playerTitle$.emit(title);
  }

}
