import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBaseAssetsDto } from 'src/dto/create-baseAssets.dto';
import { pac_assets } from 'src/entity/pac_assets.entity';
import { AssetsManagementService } from './assets-management.service';

@Controller('assets-management')
export class AssetsManagementController {
    constructor(private readonly assetsManagementService: AssetsManagementService) {}

    @Get('/findAll')
    async findAllAssets(): Promise<pac_assets[]> {
        return await this.assetsManagementService.findAll();
    }

    @Post('/createAsset')
    async createScript(@Body() post: CreateBaseAssetsDto): Promise<pac_assets> {
        return this.assetsManagementService.createAsset(post);
    }
}
