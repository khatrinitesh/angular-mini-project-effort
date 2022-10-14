import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroformComponent } from './heroform.component';

describe('HeroformComponent', () => {
  let component: HeroformComponent;
  let fixture: ComponentFixture<HeroformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
