import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomchildComponent } from './customchild.component';

describe('CustomchildComponent', () => {
  let component: CustomchildComponent;
  let fixture: ComponentFixture<CustomchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
