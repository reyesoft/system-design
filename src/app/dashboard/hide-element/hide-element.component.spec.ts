import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideElementComponent } from './hide-element.component';

describe('HideElementComponent', () => {
  let component: HideElementComponent;
  let fixture: ComponentFixture<HideElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
