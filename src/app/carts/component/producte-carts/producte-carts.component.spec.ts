import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteCartsComponent } from './producte-carts.component';

describe('ProducteCartsComponent', () => {
  let component: ProducteCartsComponent;
  let fixture: ComponentFixture<ProducteCartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducteCartsComponent]
    });
    fixture = TestBed.createComponent(ProducteCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
