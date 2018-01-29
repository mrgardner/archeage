import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSlotsComponent } from './equipment-slots.component';

describe('EquipmentSlotsComponent', () => {
  let component: EquipmentSlotsComponent;
  let fixture: ComponentFixture<EquipmentSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
