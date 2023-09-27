import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  StudentList: any[] = [];

  constructor(private service: StudentsService) {}

  ngOnInit(): void {
    this.service.GetAllData().subscribe((res: any[]) => { // Specify the type as 'any[]'
      console.log(res);
      this.StudentList = res;
    });
  }
}
