import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly httpService: HttpService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/order')
  createOrder(@Body() data) {
    const createOrder = this.appService.createOrder(data);
    return createOrder;
  }
  @Get('/order')
  getOrder(): string {
    return this.appService.getOrder();
  }
  @Get('/test')
 async bar(): Promise<any> {
  const baseResponse = await this.httpService.get('http://192.168.12.122:3000/').toPromise();
  console.log(baseResponse.data);
  return baseResponse.data;
 }
}
