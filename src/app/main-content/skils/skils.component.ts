import { Component, inject } from '@angular/core';
import { SoloSkilComponent } from "./solo-skil/solo-skil.component";
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skils',
  standalone: true,
  imports: [SoloSkilComponent, TranslateModule],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.scss'
})
export class SkilsComponent {

  translate = inject(TranslationService)

}
