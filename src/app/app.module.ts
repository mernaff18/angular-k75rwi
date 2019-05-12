import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule,MatGridListModule,MatCardModule,MatChipsModule,MatInputModule,  MatFormFieldModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ MatRadioModule,BrowserModule, BrowserAnimationsModule,FormsModule,MatGridListModule,MatCardModule,MatChipsModule,FlexLayoutModule,NgxPaginationModule,HttpClientModule,ReactiveFormsModule,MatInputModule,  MatFormFieldModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
