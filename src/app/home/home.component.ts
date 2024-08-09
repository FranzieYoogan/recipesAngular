import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SharedService } from '../shared.service';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private shared: SharedService, private router: Router){}

  data:any
  ngOnInit(): void {
    
    this.shared.getData().subscribe((config) => {

    this.data = config      
    console.log(config)

    })

  }

  getId(item:any) {
    
    this.shared.getId(item)
    this.router.navigate(['/result'])

  }

}
