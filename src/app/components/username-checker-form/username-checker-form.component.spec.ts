import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameCheckerFormComponent } from './username-checker-form.component';

describe('UsernameCheckerFormComponent', () => {
  let component: UsernameCheckerFormComponent;
  let fixture: ComponentFixture<UsernameCheckerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameCheckerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameCheckerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
