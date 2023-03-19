import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subcriber } from './Subscriber';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  arrNewsLetterSubscribers: Subcriber[] = [
    new Subcriber("Martin Smith", "martin.smith@gmail.com", "Fish", "Pune")
  ];

  strName = new FormControl('');
  strEmail = new FormControl('');
  strPet = new FormControl('');
  strLocation = new FormControl('');

  subscribe() {
    this.arrNewsLetterSubscribers.push(new Subcriber(this.strName.value, this.strEmail.value, this.strPet.value, this.strLocation.value));
  }

  unSubscribe(email: string | null) {
    this.arrNewsLetterSubscribers = this.arrNewsLetterSubscribers.filter(o => o.email != email);
  }
}
