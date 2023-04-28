import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string='';
  email: string='';
  message: string='';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('message', this.message);

    this.http.post('send-email.php', formData).subscribe(response => {
      alert('Email sent successfully!');
    }, error => {
      alert('Error sending email. Please try again later.');
    });
  }
}