import { Component , OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CourseService } from '../Services/course.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  // templateUrl: './home.component.html',  // Fixed: removed empty imports array
  // styleUrls: ['./home.component.css']     // Fixed: changed styleUrl to styleUrls

})
export class HomeComponent implements OnInit {
courses: Course[] = [];
constructor(private courseService: CourseService) {
  this.courses = this.courseService.getAll();
}

ngOnInit(): void {
  this.courses = this.courseService.getAll();
}
}
