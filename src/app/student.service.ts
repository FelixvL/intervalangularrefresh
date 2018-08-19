import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private theUrl = 'http://localhost:8082/api/pepsi';  // URL to web api

  getStudent() : Student{
    let studentTemp : Student = new Student();
    studentTemp.naam = 'Frits';
    return studentTemp;
  }
  constructor( private http: HttpClient) { }
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.theUrl)
  }
}
