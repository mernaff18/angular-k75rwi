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

  newarray:any = ["john","Rose","Aaron","Sarah","Rose","Kevin","Sarah"];
  

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            
        });
        
    }

displayarray(near){
   for(let p in near){
     console.log(p + "   " +near[p]);
   }
}
removeDuplicate(arry){
     let temp = {};
     let j = 0;
     for(let i=0;i<arry.length;i++){
       temp[arry[i]]=1;      
       j++;
      console.log(temp);
     }
     this.displayarray(temp);
     let final = [];
     for(let key in temp){
       final.push(key);
    }
     console.log(final);
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


  ps: number = 1;
  correctAns : any ;  
  myAnswers :any =[];
  questionNo:any = [];
  correctAnswer:any = [];
  choosedAnswer:any = [];
  score : any = 0;


  answerOnselect(questionNo,correctAnswer,choosedAnswer){ 
        this.myAnswers.push(
              { 
                "questionNo":questionNo,
                "correctAnswer":correctAnswer,
                "choosedAnswer":choosedAnswer.value
              }
        );
        
        
  }





  submitExam() {
    
      if(this.myAnswers.length<=0){
            console.log("your Score is  " + this.score)
      }
      else{
        for(let i =0; i<this.myAnswers.length;i++){
          this.questionNo[i] = this.myAnswers[i].questionNo;
          this.correctAnswer[i] = this.myAnswers[i].correctAnswer;
          this.choosedAnswer[i] = this.myAnswers[i].choosedAnswer;            
          console.log("Question No  " + this.questionNo[i]);
          console.log("Correct Answer  " + this.correctAnswer[i]);
          console.log("Choosed Answer  " + this.choosedAnswer[i]);
          console.log("--------------------------------------------");
          if( this.correctAnswer[i] === this.choosedAnswer[i]) {
            console.log("Your answer is Correct");
            this.score = this.score + 10;
          }
          else
          {
            console.log("Your Answer is Wrong");
              this.score = this.score;
          }
          console.log("--------------------------------------------");
          console.log("your Score is  " + this.score);
          
        }
      }
      console.log(this.myAnswers);

        this.removeDuplicate(this.myAnswers);
        this.displayarray(this.myAnswers);
     
    
  }
  questionsanswer=[
    {
      "number": 1,
      "question": "Eighteen thousandths, written as a decimal, is:",
      "answers": [
        "0.0018",
        "0.018",
        "0.18"
      ],
      "correct_answer": "0.0018"
    },
    {
      "number": 2,
      "question": "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
      "answers": [
        "12",
        "13",
        "14",
        "15"
      ],
      "correct_answer": "14"
    }
    ,
    {
      "number": 3,
      "question": "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
      "answers": [
        "12",
        "13",
        "14",
        "15"
      ],
      "correct_answer": "14"
    }
    ,
    {
      "number": 4,
      "question": "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
      "answers": [
        "12",
        "13",
        "14",
        "15"
      ],
      "correct_answer": "14"
    }
  ]
}
