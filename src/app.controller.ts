import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/normal')
  normal() {
    return this.appService.normal();
  }

  @Get('/fields1')
  fields1() {
    return this.appService.fields1();
  }

  @Get('/fields2')
  fields2() {
    return this.appService.fields2();
  }
}
