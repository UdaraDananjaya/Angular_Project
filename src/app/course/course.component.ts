import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CourseService } from '../Services/course.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-course',
  imports: [CommonModule,RouterModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
course: Course| undefined;
  constructor(private route: ActivatedRoute ,private courseService: CourseService) {
    //console.log(this.route.snapshot.paramMap.get('id')); //  /routename
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.course = this.courseService.getCourseDetails(Number(id));
  }
}
