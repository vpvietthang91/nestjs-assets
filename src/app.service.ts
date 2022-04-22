import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AssetsManagementService } from './base-service/assets-management/assets-management.service';
import { pac_assets } from './entity/pac_assets.entity';
import { BaseService } from './http-service/base-api.service';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    @Inject('pac_assets')
    private pacAssets: Repository<pac_assets>
  ) {}
  baseService: any = new BaseService(this.httpService);
  assetsManagementService: any = new AssetsManagementService(this.pacAssets);
  getOrder(): string {
    return 'Test public method'
  }
  async createOrder(data: any) {
    console.log("processing workflow id: "+data.id);
    if(parseInt(data.workflow_id) == 6798) {
      var objJson = JSON.parse(data.todos);
      for(let todoObj of objJson) {
        console.log("processing todo id: "+todoObj.id);
        console.log(objJson);
        if(parseInt(todoObj.status)) {
          console.log("Get todos from Base API");
          const params = this.getRequestParamsWorkflow(data.id);
          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
          const baseResponse = await this.baseService.baseWorkflow_Post6798('https://workflow.base.vn/extapi/v1/job/get', params, config);

          for(let assetInfo of baseResponse.data.todos) {
            console.log(assetInfo.result.content)
            var assetsMap = this.extractTodoAssets(assetInfo.result.content);
            for(let i of assetsMap) {
              // TODO
              const itemAsset = await this.assetsManagementService.findByCode(i[1])
              if(itemAsset) {
                console.log("Updating asset with assets code: "+i[1])
                itemAsset.checkout_to = baseResponse.data.job.form[0].value;
                itemAsset.checkout_date = new Date;
                itemAsset.check_io = "out";
                itemAsset.department = baseResponse.data.job.form[2].value;
                console.log(itemAsset);
                this.assetsManagementService.updateAsset(itemAsset);
                console.log("Updated asset with assets code: "+i[1]);
              }else {
                // TODO
                
                console.log("Not found asset with assets code: "+i[1]+" in database");
              }
            }
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

  extractTodoAssets(content: string) {
    //content = "1. Dell Vostro 3669, i5 7400U, 1Tb HDD - Serial: 2RNBMP2 - Mã TS: 30.05.120<br>2. Ram DDR4 Laptop Kingston 8GB bus 2666 - Serial: 2042 0000008938171K001513 - Mã TS: 30.14.006<br>3. ổ cứng gắn trong SSD Western Green 120GB 2.5 7mm Sata3 (WDS120G2G0A) - Serial: 200856803172- Mã TS: 30.18.20<br>4. Màn Hình Dell 19” - Serial: 3XCLQ62 - Mã TS: 30.06.061";
    var items = content.split("<br>");
    console.log(items);
    var itemMap = new Map();
    for(let item of items) {
      var temp = item.split("-");
      if(temp[1] != null && temp[2] != null) {
        itemMap.set(temp[1].replace("Serial:","").trim(), temp[2].replace("Mã TS:","").trim());
      }
    }
    console.log(itemMap);
    return itemMap;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
