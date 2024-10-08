import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {

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
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {  // der else if wird für das Testen der Mailfunktion benötigt
      // Platz um zu erweitern der Funktionen
      ngForm.resetForm();
    }
  }
}
