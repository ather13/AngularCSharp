import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import { observable,of, Observable } from "rxjs";
import { map,catchError,tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class studentService {

  constructor(private http:HttpClient) {     
  };

  apiUrl = 'http://localhost:1217/api/';
    httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    studentList:any=[]

    private extractStudent(response : Response) {
      let body = response;
      return body || {};
    }

    getStudentUrl():string{
      return this.apiUrl + 'student';
    }

  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    school: new FormControl('')
  });


getStudent(id:number):Observable<any>{
  return this.http.get(this.getStudentUrl() + '/' + id).pipe(
    map(this.extractStudent)
  );
}

  getstudents() {
    this.studentList = this.http.get(this.getStudentUrl()).pipe(
      map(this.extractStudent)
    );

    return this.studentList;
  }


  insertstudent(std) {
    this.http.post(this.getStudentUrl(),JSON.stringify(std),this.httpOptions).pipe(
      tap((s) => console.log('student added')),
      catchError(error => of(`Bad result in post: ${error}`))  
    );
  }

  
  populateForm(student) {
    this.form.setValue(student);
  }


  updatestudent(std) {
    this.http.put(this.getStudentUrl() + '/' + std.id,JSON.stringify(std),this.httpOptions).pipe(
      tap((s) => console.log('student updated')),
      catchError(error => of(`Bad result in put: ${error}`))  
    );
  }

  deletestudent(id: string) {
    console.log('delete service');
    console.log(id);
    this.http.delete(this.getStudentUrl() + '/' + id,this.httpOptions).pipe(
      tap((s) => console.log('student deleted')),
      catchError(error => of(`Bad result in delete: ${error}`))  
    );
  }

}
