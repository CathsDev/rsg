import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTraitComponent } from './single-trait.component';

describe('SingleTraitComponent', () => {
  let component: SingleTraitComponent;
  let fixture: ComponentFixture<SingleTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
