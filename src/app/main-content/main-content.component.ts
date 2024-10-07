import { Component } from '@angular/core';
import { IchBinComponent } from "./ich-bin/ich-bin.component";
import { UberMichComponent } from "./uber-mich/uber-mich.component";
import { SkilsComponent } from "./skils/skils.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [IchBinComponent, UberMichComponent, SkilsComponent, PortfolioComponent, KontaktComponent, HeaderComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
