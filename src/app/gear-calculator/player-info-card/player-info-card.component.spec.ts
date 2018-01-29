import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoCardComponent } from './player-info-card.component';

describe('PlayerInfoCardComponent', () => {
  let component: PlayerInfoCardComponent;
  let fixture: ComponentFixture<PlayerInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
