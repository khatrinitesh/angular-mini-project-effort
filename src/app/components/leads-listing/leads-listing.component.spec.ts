import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsListingComponent } from './leads-listing.component';

describe('LeadsListingComponent', () => {
  let component: LeadsListingComponent;
  let fixture: ComponentFixture<LeadsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
