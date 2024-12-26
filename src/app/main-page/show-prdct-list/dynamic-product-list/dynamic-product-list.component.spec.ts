import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProductListComponent } from './dynamic-product-list.component';

describe('DynamicProductListComponent', () => {
  let component: DynamicProductListComponent;
  let fixture: ComponentFixture<DynamicProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicProductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
