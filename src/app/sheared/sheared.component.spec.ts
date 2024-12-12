import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearedComponent } from './sheared.component';

describe('ShearedComponent', () => {
  let component: ShearedComponent;
  let fixture: ComponentFixture<ShearedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShearedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
