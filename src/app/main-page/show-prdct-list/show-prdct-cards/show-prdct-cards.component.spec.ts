import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrdctCardsComponent } from './show-prdct-cards.component';

describe('ShowPrdctCardsComponent', () => {
  let component: ShowPrdctCardsComponent;
  let fixture: ComponentFixture<ShowPrdctCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPrdctCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPrdctCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
