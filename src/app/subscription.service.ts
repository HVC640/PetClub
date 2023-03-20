import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcriber } from './contact-us/Subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {  //Service Created for Subscription Details.

  constructor() { }

  arrNewsLetterSubscribers: Subcriber[] = [new Subcriber("Martin Smith", "martin.smith@gmail.com", "Fish", "Pune")];

  //Get Subscribers
  getSubscriber() {
    return this.arrNewsLetterSubscribers;
  }
  //Add new Subscribers
  addSubscriber(obj: Subcriber) {
    this.arrNewsLetterSubscribers.push(obj);
  }
  //Delete a Subscribers
  deleteSubscriber(obj: Subcriber) {
    this.arrNewsLetterSubscribers = this.arrNewsLetterSubscribers.filter(o => o != obj);
  }
}
