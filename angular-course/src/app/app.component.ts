import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;
  startDate = new Date();


  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;



  /*@ViewChild('container')
  containerDiv: ElementRef;*/



  constructor(){


  }
  ngAfterViewInit() {
    //console.log('AfterInit containerDiv: ', this.containerDiv);
      // this.cards.changes.subscribe(
      //   cards => console.log(cards)
      // );
    
    console.log(this.cards)
    
  }

  onCoursesEdited(){
    this.courses.push(
      {
        id: 11,
        description: "Collei",
        longDescription: "A trainee ranger active in Avidya Forest. Behind her enthusiastic words and actions hides a slightly introverted personality.",
        iconUrl: '../assets/collei.png',
      }
    );
  }

  oncourseSelected(course: Course) {

    

  }
}




  /**ViewChild with AfterViewInit
  @ViewChild('cardRef1', {read: ElementRef})
  card1: CourseCardComponent;

  @ViewChild('cardRef2')
  card2: CourseCardComponent; */


 /*  
  Without ng for core directive
  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2]; */

/* 
  level = 90.00;
  CRITrate = 0.5345;
  course = COURSES[0];
  title = COURSES[0].description;
*/
