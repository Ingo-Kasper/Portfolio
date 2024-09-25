import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchBinComponent } from './ich-bin.component';

describe('IchBinComponent', () => {
  let component: IchBinComponent;
  let fixture: ComponentFixture<IchBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IchBinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IchBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
