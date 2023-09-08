import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProducteComponent } from './all-producte.component';

describe('AllProducteComponent', () => {
  let component: AllProducteComponent;
  let fixture: ComponentFixture<AllProducteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProducteComponent]
    });
    fixture = TestBed.createComponent(AllProducteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
