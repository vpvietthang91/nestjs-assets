import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { BaseService } from './http-service/base.service';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
  ) {}
  baseService: any = new BaseService(this.httpService);
  getOrder(): string {
    return 'Test public method'
  }
  async createOrder(data: any) {
    console.log("processing workflow id: "+data.id);
    if(parseInt(data.workflow_id) == 6798) {
      //TODO
      var objJson = JSON.parse(data.todos);
      for(let todoObj of objJson) {
        console.log("processing todo id: "+todoObj.id);
        console.log(objJson);
        if(parseInt(todoObj.status)) {
          console.log("callback Base API");
          const baseResponse = await this.baseService.baseWorkflow_6798('http://192.168.12.122:3000/');
          console.log(baseResponse.data);
        }else {
          console.log("awaiting for complete");
        }
      }
    }else {
      console.log("no todos to process")
    }
    return;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
