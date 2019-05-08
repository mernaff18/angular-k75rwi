import { Component } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Cruds';
  page: number = 1;
  itemperpage: number =2;
  
constructor (private http: HttpClient,private formBuilder: FormBuilder) { 
 
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

registerForm: FormGroup;
    submitted = false;

   

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        console.log("success" + this.registerForm.value.firstName);
    }
  
}
