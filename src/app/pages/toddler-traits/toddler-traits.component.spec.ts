import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToddlerTraitsComponent } from './toddler-traits.component';

describe('ToddlerTraitsComponent', () => {
  let component: ToddlerTraitsComponent;
  let fixture: ComponentFixture<ToddlerTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToddlerTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToddlerTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
