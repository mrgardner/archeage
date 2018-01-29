import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearMenuComponent } from './gear-menu.component';

describe('GearMenuComponent', () => {
  let component: GearMenuComponent;
  let fixture: ComponentFixture<GearMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
