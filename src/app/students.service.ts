import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  data: any;
  constructor(private http: HttpClient) {}

  GetAllData() {
    return this.http.get<any[]>('http://localhost:3002/students'); 
    
  }
  AddData(data:any){
    return this.http.post('http://localhost:3002/students',data);
  } 
  
}
