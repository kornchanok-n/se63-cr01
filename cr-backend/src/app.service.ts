import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Kuy Rai Yed Mae Kub!';
  }
}
