import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridResponsiveComponent } from './grid-responsive.component';

describe('GridResponsiveComponent', () => {
  let component: GridResponsiveComponent;
  let fixture: ComponentFixture<GridResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
