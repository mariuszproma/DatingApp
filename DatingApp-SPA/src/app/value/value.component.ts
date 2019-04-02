import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.httpClient.get('http://localhost:5000/api/values'). subscribe(
      result => this.values = result,
      error => console.log(error)
    );
  }
}
