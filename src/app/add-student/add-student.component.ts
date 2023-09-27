import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(private fb: FormBuilder, private service: StudentsService) { }

  // Define the FormGroup
  Student = this.fb.group({
    productName: ['', Validators.required],
    productAds: ['', Validators.required],
    productPrice: ['', Validators.required],
    productLink: ['', Validators.required],
    IsActive: ['true'],
  });

  students:any = []

  save() {
    if (this.Student.invalid) {
      alert('Please fill in all fields');

    }
    else {
      this.service.AddData(this.Student.value).subscribe((res: any) => {
        this.students = this.Student.value;
      });
    }

    this.Student.reset();
  }
}
