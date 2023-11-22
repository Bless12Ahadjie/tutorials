import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Data } from '@angular/router';


@Component({
  selector: 'app-nav-child',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './nav-child.component.html',
  styleUrl: './nav-child.component.css' 
})
export class NavChildComponent {
  getValue: any = "";
  postValue: any = '';

  constructor (private http: HttpClient) {
    this.getApi();
  }

  getApi(): void{
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data) => {
     console.log(data);
     this.getValue = data;

    }

    );

  }
  

}
