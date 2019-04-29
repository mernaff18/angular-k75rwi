import { Component } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Cruds';
  page: number = 1;
  itemperpage: number =2;
  
constructor (private http: HttpClient) { 
 
}
reports: any;

  ngOnInit () {
    this.http.get('data/data.json').subscribe(
      data => {
        this.reports = data;
        console.log(this.reports);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  
}
