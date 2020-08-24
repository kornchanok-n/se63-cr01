import { Controller, Get } from '@nestjs/common';
import { Course } from './interfaces/course.interface';
import { CoursesService } from './courses.service';


@Controller('courses')
export class CoursesController {
  //constructor(private readonly appService: AppService) {}
  constructor(private coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }
}
