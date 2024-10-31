import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [ TranslateModule, FormsModule, CommonModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})

export class KontaktComponent {

  isAktiv = true;

  translate = inject(TranslationService);
  http = inject(HttpClient);

  contactData =  {
    name: '',
    email: '',
    message: '',
  }

  mailTest = false ; // nach den Testen der Mailfunktion auf false setzen

  post = {
    endPoint: 'https://ingo-kasper.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text' as 'json',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.isClicked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // Platz um zu erweitern der Funktionen
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      }
    this.isAktiv = false;
  }

  isClicked: boolean = false;

  toggleCheckmark(): void {
    this.isClicked = !this.isClicked;
  }

  closeMail() {
    this.isAktiv = true;
  }
}
