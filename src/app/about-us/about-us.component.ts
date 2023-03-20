import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  //Variable to toggele Vission and Mission.
  boolMission = true;

  hideMission() {
    this.boolMission = false;
  }

  hideVision() {
    this.boolMission = true;
  }

  constructor(private router: Router) { }

  learnMore() {
    this.router.navigate(['/Services']);
  }
}
