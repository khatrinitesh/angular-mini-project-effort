import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbacktopComponent } from './scrollbacktop.component';

describe('ScrollbacktopComponent', () => {
  let component: ScrollbacktopComponent;
  let fixture: ComponentFixture<ScrollbacktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollbacktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollbacktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
