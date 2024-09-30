import { Component } from '@angular/core';
import { SoloSkilComponent } from "./solo-skil/solo-skil.component";

@Component({
  selector: 'app-skils',
  standalone: true,
  imports: [SoloSkilComponent],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.scss'
})
export class SkilsComponent {

}
