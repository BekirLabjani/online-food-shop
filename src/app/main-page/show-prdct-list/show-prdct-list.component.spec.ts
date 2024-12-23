import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrdctListComponent } from './show-prdct-list.component';

describe('ShowPrdctListComponent', () => {
  let component: ShowPrdctListComponent;
  let fixture: ComponentFixture<ShowPrdctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPrdctListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPrdctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
