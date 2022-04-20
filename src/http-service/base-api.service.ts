import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BaseService {
    constructor(private httpService: HttpService) {}

    getInstruction(): string {
        return 'Base service method'
    }

    async baseWorkflow_Post6798(url: string, params, config): Promise<any> {
        return this.httpService.post(url, params, config).toPromise();
    }
}