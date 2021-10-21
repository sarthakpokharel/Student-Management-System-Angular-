import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html'
})
export class ListStudentComponent implements OnInit {

  constructor(private student: StudentsService) { }
  studentData:any=[];

  dtOptions: DataTables.Settings = {};
  posts:any;

  ngOnInit(): void {
    this.dtOptions = {

      pagingType: 'full_numbers',

      pageLength: 5,

      lengthMenu : [5,10,15,20],

      processing: true

    };
    
    this.studentData  = this.student.getAllStudentList();
  }

  deleteStudent(student_id: any){
    //console.log (student_id);
    this.student.deleteStudent(student_id).subscribe((result) => {
      console.log (result);
      this.ngOnInit();
    },err=>{
      console.log(err);
    }); 
  }

}
