import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {

  constructor(private shared: SharedService, private router: Router){}

    data:any
    ngOnInit(): void {

      this.shared.retrieveId().subscribe((config) => {

        console.log(config)
        this.data = config

      })
            

    }

    back() {

      this.router.navigate(['/recipes'])

    }

}
