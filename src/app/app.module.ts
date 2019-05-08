import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule,MatCardModule,MatChipsModule,MatInputModule,  MatFormFieldModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatGridListModule,MatCardModule,MatChipsModule,FlexLayoutModule,NgxPaginationModule,HttpClientModule,ReactiveFormsModule,MatInputModule,  MatFormFieldModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
