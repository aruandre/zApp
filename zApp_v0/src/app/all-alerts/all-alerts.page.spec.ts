import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAlertsPage } from './all-alerts.page';

describe('AllAlertsPage', () => {
  let component: AllAlertsPage;
  let fixture: ComponentFixture<AllAlertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAlertsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAlertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
