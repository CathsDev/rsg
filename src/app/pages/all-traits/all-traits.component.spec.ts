import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTraitsComponent } from './all-traits.component';

describe('AllTraitsComponent', () => {
  let component: AllTraitsComponent;
  let fixture: ComponentFixture<AllTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
