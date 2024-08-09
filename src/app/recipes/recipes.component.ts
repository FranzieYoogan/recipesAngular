import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {

  constructor(private shared: SharedService, private router: Router){}

  dataa:any
  ngOnInit(): void {

    this.shared.getData().subscribe((config) => {

      this.dataa = config

    })

  }


  back() {

    window.location.href = "/recipes"

  }



}
