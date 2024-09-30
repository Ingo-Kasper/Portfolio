import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAPIComponent } from './pokemon-api.component';

describe('PokemonAPIComponent', () => {
  let component: PokemonAPIComponent;
  let fixture: ComponentFixture<PokemonAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
