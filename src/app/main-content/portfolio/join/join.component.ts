import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  
  translate = inject(TranslationService)

}
