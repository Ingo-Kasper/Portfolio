import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-pollo-loco',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pollo-loco.component.html',
  styleUrl: './pollo-loco.component.scss'
})
export class PolloLocoComponent {

  translate = inject(TranslationService)

}
