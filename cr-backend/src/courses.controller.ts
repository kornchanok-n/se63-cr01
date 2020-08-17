import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('courses')
export class CoursesController {
  //constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): any {
    return [
      {
        id: '100' ,
        number: '01204111' ,
        title: 'Computer and Programming'
      },
      {
        id: '213fds' ,
        number: '01204211' ,
        title: 'Discrete mathematics and linear algebra'
      },
      {
        id: 'fljdksjfoiwr' ,
        number: '01204313' ,
        title: 'Design and analysis of algorithm'
      }
    ];
  }
}
