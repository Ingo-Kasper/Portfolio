import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { DatenschutzComponent } from "./datenschutz/datenschutz.component";
import { ImpressumComponent } from "./impressum/impressum.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, MainContentComponent, DatenschutzComponent, ImpressumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
