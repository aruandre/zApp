import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAlertPage } from './single-alert.page';

describe('SingleAlertPage', () => {
  let component: SingleAlertPage;
  let fixture: ComponentFixture<SingleAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAlertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
