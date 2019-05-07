import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { studentComponent } from './student/student.component';
import { studentListComponent } from './student-list/student-list.component';
import { studentService } from './shared/student.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    studentComponent,
    studentListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
