import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

 /*  
  Without ng for core directive
  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2]; */

  title = COURSES[0].description;
  startDate = new Date();
  level = 90.00;
  CRITrate = 0.5345;
  course = COURSES[0];

  oncourseSelected(course: Course) {
    console.log('Card clicked by: card-component', course);
  }
}
