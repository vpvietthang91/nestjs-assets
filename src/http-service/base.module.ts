import { Module } from '@nestjs/common'
import { BaseService } from './base.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    providers: [BaseService],
})
export class BaseModule {}