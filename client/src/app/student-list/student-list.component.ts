import { Component, OnInit } from '@angular/core';

import { studentService } from '../shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class studentListComponent implements OnInit {

  constructor(private studentService: studentService) { }
  studentArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.studentService.getstudents().subscribe(
      list => {
        this.studentArray = list.map(item => {
          return {
            id: item.id,
            name: item.name,
            grade:item.grade,
            school:item.school
          };
          console.log(this.studentArray);
        });
      });      
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.studentService.deletestudent(id);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(student) {
    return student.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
