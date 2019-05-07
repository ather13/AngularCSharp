import { Component, OnInit } from '@angular/core';

import { studentService } from '../shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class studentComponent implements OnInit {

  constructor(private studentService: studentService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.studentService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.studentService.form.valid) {
      if (this.studentService.form.get('id').value == null)
        this.studentService.insertstudent(this.studentService.form.value);
      else
        this.studentService.updatestudent(this.studentService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.studentService.form.reset();
      //this is to be done for proper reset operation
      this.studentService.form.setValue({
        id: null,
        name: '',
        grade: '',
        school: ''
      });
    }
  }

}
