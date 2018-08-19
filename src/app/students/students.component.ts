import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import { StudentService } from '../student.service';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  student1 : Student = {
    id : 3,
    naam : 'Joost'
  };
    students : Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    interval(5000)
    .pipe(
      startWith(0),
      switchMap(() => this.studentService.getAllStudents())
    )
    .subscribe(res => {console.log(res[0]);this.student1 = res[0]; this.students = res})
  ;
  }
  hoi(){
    let studentZomaar = new Student();
    studentZomaar.naam = 'Johan';
    this.student1 = this.studentService.getStudent();
    console.log(this.student1);
  }
}
