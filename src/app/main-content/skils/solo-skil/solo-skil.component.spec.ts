import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloSkilComponent } from './solo-skil.component';

describe('SoloSkilComponent', () => {
  let component: SoloSkilComponent;
  let fixture: ComponentFixture<SoloSkilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoloSkilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoloSkilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
