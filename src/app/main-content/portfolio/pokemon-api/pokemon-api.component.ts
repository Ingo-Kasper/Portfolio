import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pokemon-api',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pokemon-api.component.html',
  styleUrl: './pokemon-api.component.scss'
})
export class PokemonAPIComponent {

  translate = inject(TranslateService)

}
