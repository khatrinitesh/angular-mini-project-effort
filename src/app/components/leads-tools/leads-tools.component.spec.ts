import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsToolsComponent } from './leads-tools.component';

describe('LeadsToolsComponent', () => {
  let component: LeadsToolsComponent;
  let fixture: ComponentFixture<LeadsToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
