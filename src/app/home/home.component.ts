import { Component } from '@angular/core';
import { Animal } from './Animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //Images for carousel.
  images = ['./assets/slide2.png', './assets/slide1.png', './assets/slide3.jpg']

  //News of Pets.
  arrNews = [
    {
      dt: '16', mt: 'MAR', link: "https://timesofindia.indiatimes.com/india/how-to-travel-with-your-pet-on-trains-heres-all-that-you-need-to-know/articleshow/98686790.cms", a: 'How to travel with your pet on trains', time: 'March 12.29.45', div: 'Passengers have the option of carrying dogs along with them in first AC accommodation or it can be booked as luggage in luggage-cum-brake van under the supervision of the train manager or guard of the train.'
    },
    {
      dt: '10', mt: 'MAR', link: "https://timesofindia.indiatimes.com/etimes/trending/the-big-fat-indian-pet-wedding/articleshow/98538426.cms", a: 'The big fat Indian ‘pet’ wedding', time: 'March 15.41.45', div: "Recently, a family from India went to unthinkable measures to express their love and care for their beloved dogs. The family married their adorable pets in a lavish ceremony."
    },
    {
      dt: '14', mt: 'FEB', link: "https://timesofindia.indiatimes.com/life-style/spotlight/pet-parents-ring-into-a-pawfect-valentines-day/articleshow/97905975.cms", a: "Pet parents ring into a pawfect Valentine's Day", time: 'February 14.11.45', div: "Dutiful pet parents just love to pamper their furry babies all-year round. However, the Valentine vibes are floating in the air and this is just another occasion for them to indulge them even more and make them feel loved."
    }
  ]

  //page Variable for pagination.
  page = 1;

  //Adoption Animals.
  arrAnimals = [
    new Animal('Felix', './assets/carousel1_img1.jpg', 'Felix is a shy Orange tabby cat looking for a home.'),
    new Animal('Gorgi', './assets/carousel1_img2.jpg', 'Gorgi is a Macaw parrot able to talk like human, native to East Asia.'),
    new Animal('Sky', './assets/carousel1_img3.jpg', 'Sky is a faithfull German Shephard dog currently looking for new owner.'),
    new Animal('Bubble & Psy', './assets/carousel1_img4.jpg', 'Bubble & Psy are sibling puppies of labrador breed.'),
    new Animal('Holy', './assets/carousel1_img5.jpg', 'Holy is a very playful black cat with grey pattern.'),
    new Animal('Happy', './assets/carousel1_img6.jpg', 'Happy is a Beaver who loves to chew on wood.')
  ]
}
