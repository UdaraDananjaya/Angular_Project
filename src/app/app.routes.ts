import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'course/:id', component: CourseComponent}
];
