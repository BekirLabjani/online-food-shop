import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCategorysComponent } from './product-card-categorys.component';

describe('ProductCardCategorysComponent', () => {
  let component: ProductCardCategorysComponent;
  let fixture: ComponentFixture<ProductCardCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardCategorysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCardCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
