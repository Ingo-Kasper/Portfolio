import { Component } from '@angular/core';
import { JoinComponent } from "./join/join.component";
import { PolloLocoComponent } from "./pollo-loco/pollo-loco.component";
import { PokemonAPIComponent } from "./pokemon-api/pokemon-api.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, PolloLocoComponent, PokemonAPIComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
