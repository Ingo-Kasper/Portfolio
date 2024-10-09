import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ich-bin',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './ich-bin.component.html',
  styleUrl: './ich-bin.component.scss'
})
export class IchBinComponent {

  translate = inject(TranslationService)
  
}
