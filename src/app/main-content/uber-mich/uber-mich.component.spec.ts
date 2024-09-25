import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UberMichComponent } from './uber-mich.component';

describe('UberMichComponent', () => {
  let component: UberMichComponent;
  let fixture: ComponentFixture<UberMichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UberMichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UberMichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
