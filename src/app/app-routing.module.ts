import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
   component:AddStudentComponent,
   path:'add-student'
  },
  {
   component:EditStudentComponent,
   path:'edit-student'
  },
  {
   component:ListStudentComponent,
   path:'list-student'
  },
  {
   component:ViewStudentComponent,
   path:'view-student'
  },
  {
   component:HeaderComponent,
   path:'header'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
