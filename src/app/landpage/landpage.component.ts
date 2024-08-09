import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landpage',
  standalone: true,
  imports: [],
  templateUrl: './landpage.component.html',
  styleUrl: './landpage.component.scss'
})
export class LandpageComponent {

  constructor(private router: Router){}

  redirect() {

    window.location.href = "/recipes"

  }

}
