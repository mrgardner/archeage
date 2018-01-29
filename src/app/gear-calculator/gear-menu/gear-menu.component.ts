import { Component } from '@angular/core';

@Component({
  selector: 'app-gear-menu',
  templateUrl: './gear-menu.component.html',
  styleUrls: ['./gear-menu.component.css']
})
export class GearMenuComponent {
  private menuItems: Array<Object> = [];

  constructor() {
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
  }
}
