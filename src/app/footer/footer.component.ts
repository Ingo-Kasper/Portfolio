import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ RouterLink, TranslateModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  translate = inject(TranslateService);
  router = inject(Router);

  datenschutzTop() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/datenschutz') {
        window.scrollTo(0, 0);
      }
    })
  }

}
