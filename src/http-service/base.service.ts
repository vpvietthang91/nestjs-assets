import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map } from 'rxjs/operators';

@Injectable()
export class BaseService {
    constructor(private httpService: HttpService) {}

    getInstruction(): string {
        return 'Base service method'
    }

    async baseWorkflow_6798(url: string): Promise<any> {
        return this.httpService.get(url).toPromise();
    }
}