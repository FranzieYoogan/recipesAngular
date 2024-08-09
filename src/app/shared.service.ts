import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  url = `http://localhost:3000/recipes`

  getData() {

   return this.http.get(this.url)

  }

  id:any

  getId(id:string) {

    this.id = id

  }

  retrieveId() {

    return this.http.get(`http://localhost:3000/recipes/${this.id}`)

  }

}
