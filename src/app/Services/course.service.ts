import { Injectable } from '@angular/core';
import {Course } from '../model/Course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  // getAll(): String[] {
  //   return ['defore', 'defore', 'defore'];
  // }

  getAll(): Course[] {
    return [
      { id: 1, name: 'Mobile Application Development', description: 'Year 4 Semester 1' },
      { id: 2, name: 'Enterprise Application Development', description: 'Year 4 Semester 2' }
    ];
  }
  
  getCourseDetails(id: number): Course {
    return this.getAll().find((course: Course) => course.id === id)!;
  }
}
