import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-uber-mich',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './uber-mich.component.html',
  styleUrl: './uber-mich.component.scss'
})
export class UberMichComponent {

  translate = inject(TranslationService)
}
