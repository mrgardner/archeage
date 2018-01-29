import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBuffsComponent } from './player-buffs.component';

describe('PlayerBuffsComponent', () => {
  let component: PlayerBuffsComponent;
  let fixture: ComponentFixture<PlayerBuffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerBuffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
