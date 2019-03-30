import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNgProject';

  name: string = "นาย ก นามสกุล ข";
  bmi: any;

  student: any = {
    name: "Peter",
    studentId: "5821601111",
    weight: 58,
    height: 160
  }

  studentList: any = [
    {
      name: "Peter",
      studentId: "5821601111",
      weight: 58,
      height: 160
    },
    {
      name: "Uki",
      studentId: "5821602222",
      weight: 70,
      height: 160
    },
    {
      name: "Marry",
      studentId: "5821603333",
      weight: 72.4,
      height: 170
    }

  ]
  constructor() {
    this.student.bmi = (this.student.weight / ((this.student.height / 100) * (this.student.height / 100))).toFixed(2);


    this.studentList.map((Object, index) => {
      let obj: any = Object;
      obj.bmi = (Object.weight / ((Object.height / 100) * (Object.height / 100))).toFixed(2);
      return obj;
    })
    console.log(this.studentList);
  }

}
