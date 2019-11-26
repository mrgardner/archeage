import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatMigrationModalComponent } from './stat-migration-modal.component';

describe('StatMigrationModalComponent', () => {
  let component: StatMigrationModalComponent;
  let fixture: ComponentFixture<StatMigrationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatMigrationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatMigrationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
