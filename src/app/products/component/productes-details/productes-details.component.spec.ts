import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductesDetailsComponent } from './productes-details.component';

describe('ProductesDetailsComponent', () => {
  let component: ProductesDetailsComponent;
  let fixture: ComponentFixture<ProductesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductesDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
