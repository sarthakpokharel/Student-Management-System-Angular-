import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url = 'http://localhost:3000/students';

  constructor(private http:HttpClient) { }

  getAllStudentList(){
    return this.http.get(this.url);
  }

  saveStudentData(data:any){
    console.log(data);
    return this.http.post(this.url, data);
  }

  deleteStudent(id:any){
    // let demo:string;
    // let dem1 = [];  
    // console.log("ID is:"+ id);
    // console.log("URL:"+ this.url);
    return this.http.delete(this.url+"/"+id);
    //return this.http.delete( 'http://localhost:3000/students/11' );
  }

  getStudentById(id: number){
    return this.http.get(this.url+"/"+id);
  }

  updateStudentData(id:number, data:any){
    return this.http.put(this.url+"/"+id,data)
  }
}
