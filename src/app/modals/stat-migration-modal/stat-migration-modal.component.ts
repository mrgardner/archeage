import { Component } from '@angular/core';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-stat-migration-modal',
  templateUrl: './stat-migration-modal.component.html',
  styleUrls: ['./stat-migration-modal.component.css']
})
export class StatMigrationModalComponent {
  private showStatMigrationModal: boolean;
  private statMigrationIcons: Array<Object>;
  private applicableStats: number;
  private pendingPoints: number;

  constructor(private _modalService: ModalService) {
    this._modalService.statMigrationModal$.subscribe((show) => {
      this.showStatMigrationModal = show;
    });
    this.applicableStats = 0;
    this.pendingPoints = 0;
    this.statMigrationIcons = [
      {
        name: 'Agility',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_agility.png?alt=media&token=517f9389-6e08-4ac2-9121-24c3748486fd',
        value: 158,
        newValue: 0,
        positive: true,
        negative: false
      },
      {
        name: 'Intelligence',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_intelligence.png?alt=media&token=4a145d7e-2a0f-4159-a424-34221445ca25',
        value: 158,
        newValue: 0,
        positive: true,
        negative: false
      },
      {
        name: 'Spirit',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_spirit.png?alt=media&token=33090ced-9082-4192-834b-f06f1a563c11',
        value: 158,
        newValue: 0,
        positive: true,
        negative: false
      },
      {
        name: 'Stamina',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_stamina.png?alt=media&token=2edecd40-a246-4af7-8436-51db3ea731d0',
        value: 158,
        newValue: 0,
        positive: true,
        negative: false
      },
      {
        name: 'Strength',
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/misc%2Fstat-migration%2Ficon_skill_stat_strength.png?alt=media&token=b33efacf-379e-4717-aa6e-1310416c5d25',
        value: 158,
        newValue: 0,
        positive: true,
        negative: false
      }
    ];
  }

  closeModal() {
    this._modalService.closeStatMigrationModal();
  }

  resetStats() {
    for (let migration in this.statMigrationIcons) {
      this.statMigrationIcons[migration]['value'] = 158;
      this.statMigrationIcons[migration]['newValue'] = 0;
      this.applicableStats = 0;
      this.statMigrationIcons[migration]['positive'] = true;
      this.statMigrationIcons[migration]['negative'] = false;
    }
    this._modalService.setStats(this.statMigrationIcons);
    this.closeModal();
  }

  applyStats() {
    this._modalService.setStats(this.statMigrationIcons);
    this.closeModal();
  }

  changeStatValue(stat) {
    // let tempDifference1 = this.strengthDifferenceMigrationStat;
    // let tempDifference2;
    // let temp1 = this.strengthMigrationStat - 158;
    // if (this.strengthMigrationStat >= 158 && this.applicableStats >= 0) {
    //   this.strengthDifferenceMigrationStat = 158 - this.strengthMigrationStat;
    //   if (this.applicableStats >= 300) {
    //     if ((temp1) > tempDifference1) {
    //       let temp2 = Math.abs(tempDifference1) - Math.abs(this.strengthMigrationStat - 158);
    //       this.strengthDifferenceMigrationStat = temp1;
    //       if (this.strengthDifferenceMigrationStat >= 0) {
    //         this.applicableStats -= Math.abs(temp2);
    //         this.pendingPoints += Math.abs(temp2);
    //       }
    //       else {
    //         this.applicableStats += temp2;
    //       }
    //     }
    //     else {
    //       this.applicableStats = 300;
    //       this.strengthMigrationStat = 158 - Math.abs(tempDifference1);
    //     }
    //   }
    //   else {
    //     console.log('HA HA');
    //     if (this.strengthMigrationStat > this.applicableStats && this.applicableStats > 0) {
    //       this.strengthMigrationStat = this.applicableStats;
    //       this.strengthDifferenceMigrationStat = this.applicableStats;
    //       this.applicableStats = 0;
    //     }
    //     else if (this.pendingPoints === 300) {
    //       console.log('WOOT');
    //       this.strengthMigrationStat = 158;
    //       this.applicableStats = 0;
    //       this.strengthDifferenceMigrationStat = this.applicableStats;
    //     }
    //     else {
    //       this.strengthDifferenceMigrationStat = this.strengthMigrationStat - 158;
    //       tempDifference2 = this.strengthDifferenceMigrationStat;
    //       if (this.strengthDifferenceMigrationStat >= 0) {
    //         this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
    //         this.pendingPoints += Math.abs(Math.abs(tempDifference1) -  Math.abs(tempDifference2));
    //       }
    //       else {
    //         this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
    //       }
    //     }
    //   }
    //   document.getElementById('strengthId').innerHTML = '+' + Math.abs(this.strengthDifferenceMigrationStat);
    //   console.log(this.pendingPoints);
    //   document.getElementById('strengthId').style.color = 'blue';
    // }
    // else if (this.strengthMigrationStat < 158 && this.applicableStats >= 0) {
    //   if (this.applicableStats >= 300) {
    //     console.log(tempDifference1);
    //     console.log(this.strengthMigrationStat - 158);
    //     if ((this.strengthMigrationStat - 158) > tempDifference1) {
    //       let temp = Math.abs(tempDifference1) - Math.abs(this.strengthMigrationStat - 158);
    //       this.strengthDifferenceMigrationStat += temp;
    //       if (this.strengthDifferenceMigrationStat >= 0) {
    //         this.applicableStats += temp;
    //       }
    //       else {
    //         this.applicableStats -= temp;
    //       }
    //       document.getElementById('strengthId').innerHTML = '' + this.strengthDifferenceMigrationStat;
    //     }
    //     else {
    //       this.applicableStats = 300;
    //       this.strengthMigrationStat = 158 - Math.abs(tempDifference1);
    //     }
    //   }
    //   else {
    //     if (Math.abs(this.strengthMigrationStat - 158) >= Math.abs(this.applicableStats - 300)) {
    //       this.strengthDifferenceMigrationStat = (Math.abs(this.applicableStats - 300) * -1);
    //       this.strengthMigrationStat = Math.abs(158 - Math.abs(this.applicableStats - 300));
    //       this.applicableStats += Math.abs(this.applicableStats - 300);
    //       document.getElementById('strengthId').style.color = 'red';
    //       document.getElementById('strengthId').innerHTML = '' + this.strengthDifferenceMigrationStat;
    //     }
    //     else if (this.pendingPoints === 300) {
    //       this.strengthMigrationStat = 158;
    //       this.applicableStats = 0;
    //       this.strengthDifferenceMigrationStat = this.applicableStats;
    //       document.getElementById('strengthId').style.color = 'blue';
    //       document.getElementById('strengthId').innerHTML = '+' + this.strengthDifferenceMigrationStat;
    //     }
    //     else {
    //       console.log('HA');
    //       this.strengthDifferenceMigrationStat = this.strengthMigrationStat - 158;
    //       tempDifference2 = this.strengthDifferenceMigrationStat;
    //       if (this.strengthDifferenceMigrationStat >= 0) {
    //         this.applicableStats += Math.abs(tempDifference1) -  Math.abs(tempDifference2);
    //       }
    //       else {
    //         this.applicableStats -= Math.abs(tempDifference1) -  Math.abs(tempDifference2);
    //       }
    //       document.getElementById('strengthId').style.color = 'red';
    //       document.getElementById('strengthId').innerHTML = '' + this.strengthDifferenceMigrationStat;
    //     }
    //   }
    //   this.applicableStats = Math.abs(this.applicableStats);
    //   this.pendingPoints = Math.abs(this.pendingPoints);
    //   console.log(this.pendingPoints);
    // }
    for (let migration in this.statMigrationIcons) {
      if (this.statMigrationIcons[migration]['name'].toLowerCase() === stat.name.toLowerCase()) {
        let temp2 = this.applicableStats + Math.abs(stat.newValue - Math.abs(158 - stat.value));
        let newValue = 0;
        if (temp2 > 300 && this.applicableStats < 300) {
          let tt = 300 - this.applicableStats;
          stat.value = temp2 - 300;
          newValue = tt;
        } else {
          newValue = Math.abs(158 - stat.value);
        }
        let lastValue = stat.newValue;
        let temp = Math.abs(lastValue - newValue);
        console.log('NEW VAUE', newValue);
        console.log('LAST VAUE', lastValue);
        console.log(temp);
        console.log(temp2);
        console.log(this.applicableStats);
        if (this.applicableStats === 0) {
          if (stat.value < 158) {
            console.log('tsetset');
            stat.positive = false;
            stat.negative = true;
            this.applicableStats += temp;
          }
        } else if (this.applicableStats > 0 && this.applicableStats <= 300) {
          if (stat.value >= 158) {
            stat.positive = true;
            stat.negative = false;
            this.applicableStats -= temp;
          } else {
            stat.positive = false;
            stat.negative = true;
            this.applicableStats += temp;
          }
          console.log(this.applicableStats);
        } else {
          this.applicableStats -= temp;
        }
        this.applicableStats = Math.abs(this.applicableStats);
        stat.newValue = newValue;
      }
    }
  }
}
