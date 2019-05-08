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


reports = [{
    "ID": "001",
   "Name": "CUDS",
    "repo": "10",
    "build": "5"
},
{
    "ID": "002",
    "Name": "clsd",
    "repo": "10",
    "build": "5" 
},
{
    "ID": "003",
    "Name": "cuds",
    "repo": "10",
    "build": "5" 
},
{
    "ID": "004",
    "Name": "cuds",
    "repo": "10",
    "build": "5" 
},
{
    "ID": "005",
    "Name": "cuds",
    "repo": "10",
    "build": "5" 
},
{
    "ID": "006",
    "Name": "cuds",
    "repo": "10",
    "build": "5" 
},
{
    "ID": "007",
    "Name": "cuds",
    "repo": "10",
    "build": "5" 
},
{
    "ID": "008",
    "Name": "cuds",
    "repo": "10",
    "build": "5" 
},
{
    "ID": "009",
    "Name": "cuds",
    "repo": "10",
    "build": "5" 
},
{
    "ID": "010",
    "Name": "cuds",
    "repo": "10",
    "build": "5" 
}];

  ngOnInit () {
    
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  
}
