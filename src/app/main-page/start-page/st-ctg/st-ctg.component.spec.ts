import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCtgComponent } from './st-ctg.component';

describe('StCtgComponent', () => {
  let component: StCtgComponent;
  let fixture: ComponentFixture<StCtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCtgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
