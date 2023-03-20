import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionService } from '../subscription.service';
import { Subcriber } from './Subscriber';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(private subscriptionService: SubscriptionService, private router: Router) { } //Creating service object.

  shopNow() {
    this.router.navigate(['/Services']);
  }
  readMore() {
    this.router.navigate(['/About-Us']);
  }

  //maintaining an subscriber array.
  arrNewsLetterSubscribers: Subcriber[] = [new Subcriber("Martin Smith", "martin.smith@gmail.com", "Fish", "Pune")];

  strName = new FormControl('');
  strEmail = new FormControl('');
  strPet = new FormControl('');
  strLocation = new FormControl('');

  //subscribing new subscriber.
  subscribe() {
    let obj: Subcriber | null = new Subcriber(this.strName.value, this.strEmail.value, this.strPet.value, this.strLocation.value);
    if (obj != null) {
      this.subscriptionService.addSubscriber(obj);
    }
    this.arrNewsLetterSubscribers = this.subscriptionService.getSubscriber();
  }

  //unsubscribing from news letter.
  unSubscribe(email: string | null) {
    let obj = this.arrNewsLetterSubscribers.find(o => o.email === email);
    if (obj != null) {
      this.subscriptionService.deleteSubscriber(obj);
    }
    this.arrNewsLetterSubscribers = this.subscriptionService.getSubscriber();
  }
}
