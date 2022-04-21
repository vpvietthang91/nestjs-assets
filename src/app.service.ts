import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { BaseService } from './http-service/base-api.service';

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
          const params = this.getRequestParamsWorkflow(data.id);
          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
          const baseResponse = await this.baseService.baseWorkflow_Post6798('https://workflow.base.vn/extapi/v1/job/get', params, config);
          for(let assetInfo of baseResponse.data.todos) {
            console.log(assetInfo.result.content)
          }
        }else {
          console.log("awaiting for complete");
        }
      }
    }else {
      console.log("no todos to process")
    }
    return;
  }

  getRequestParamsWorkflow(workflowId: any) {
    const params = new URLSearchParams();
    params.append('access_token', '4649-QDDJU2K3KQPVA6XYDLP6GVFDQ3L98D2RF5ZFY3UBQWB2UT4ZPT2PTX6JRWAK89MJ-EJQNRHLH8R4Q8LWAKS9UFPQXB6359R8N3ZTUKCE7S9GPT9F36LV34H37UGCXTVDW');
    params.append('id', workflowId);
    return params;
  }

  getRequestParamsAccount(username: any) {
    const params = new URLSearchParams();
    params.append('access_token', '4649-PGTQ5TBFKMBB4U8GM7EMWMRK3VNJ2MLEF7W2BNQVDV6TB4Z4K2C87QTJYXP3ZG9Z-REUYZYTAQN6H4NV5LCLN9URB8JTNK9WFBUPDRE7DUSQRNCQ8YXX86NJMY9KHDX58');
    params.append('username', username)
  }
  getHello(): string {
    return 'Hello World!';
  }
}
