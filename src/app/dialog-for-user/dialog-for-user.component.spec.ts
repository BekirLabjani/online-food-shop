import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForUserComponent } from './dialog-for-user.component';

describe('DialogForUserComponent', () => {
  let component: DialogForUserComponent;
  let fixture: ComponentFixture<DialogForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogForUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
