import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('courses')
export class CoursesController {
  //constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): any {
    return {message: 'Good Morning Mother Fucker'};
  }
}
