import {Component, OnInit} from '@angular/core';
import {ArcheageDatabaseService} from '../../services/database.service';
import {ModalService} from '../../services/modal.service';
import {GearCalculatorService} from '../../services/gear-calculator.service';

@Component({
  selector: 'app-title-modal',
  templateUrl: './title-modal.component.html',
  styleUrls: ['./title-modal.component.css']
})
export class TitleModalComponent implements OnInit {
  private titles: Array<Object> = [];
  private showTitleModal: boolean;
  private currentTitle: Object = {};

  constructor(
      private _database: ArcheageDatabaseService,
      private _modalService: ModalService,
      private _gearCalculatorService: GearCalculatorService) {
    this._modalService.titleModal$.subscribe((show) => {
      this.showTitleModal = show;
    });
  }

  ngOnInit() {
    this.titles = this._database.getAllTitles();
  }

  closeTitleModal() {
    this._modalService.closeModal();
  }

  setNewTitle(title: string) {
    this._modalService.setPlayerTitle(title);
    this._gearCalculatorService.addPlayerBuff(title, this.currentTitle);
    this.showTitleModal = false;
    this.currentTitle = title;
  }

  resetTitle() {
    this._modalService.setPlayerTitle({});
    this._gearCalculatorService.removePlayerBff({});
    this.showTitleModal = false;
  }
}
