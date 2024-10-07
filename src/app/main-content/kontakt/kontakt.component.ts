import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(ngForm.value);
    }
  }
}
