/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NpcTableComponent } from './npc-table.component';

describe('NpcTableComponent', () => {
  let component: NpcTableComponent;
  let fixture: ComponentFixture<NpcTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
