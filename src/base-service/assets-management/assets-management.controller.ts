import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateBaseAssetsDto } from 'src/dto/create-baseAssets.dto';
import { UpdateBaseAssetsDto } from 'src/dto/update-baseAssets.dto';
import { pac_assets } from 'src/entity/pac_assets.entity';
import { AssetsManagementService } from './assets-management.service';

@Controller('assets-management')
export class AssetsManagementController {
    constructor(private readonly assetsManagementService: AssetsManagementService) {}

    @Post('/createAsset')
    async createAsset(@Body() post: CreateBaseAssetsDto): Promise<pac_assets> {
        return this.assetsManagementService.createAsset(post);
    }

    @Get('/findAll')
    async findAllAssets(): Promise<pac_assets[]> {
        return await this.assetsManagementService.findAll();
    }

    @Get('/findAssetById/:id')
    async findAssetByid(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number): Promise<pac_assets> {
        return this.assetsManagementService.findById(id);
    }

    @Get('/findAssetBySerial')
    async findAssetBySerial(@Query('serial') serial: string): Promise<pac_assets> {
        return this.assetsManagementService.findBySerial(serial);
    }

    @Get('/findAssetByCode')
    async findAssetByCode(@Query('code') code: string): Promise<pac_assets> {
        return this.assetsManagementService.findByCode(code);
    }

    @Put('/updateAsset')
    async updateAsset(@Body() put: UpdateBaseAssetsDto): Promise<pac_assets> {
        return this.assetsManagementService.updateAsset(put);
    }

    @Put('/deleteAsset/:id')
    async deleteAsset(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number, @Res({passthrough: true}) res: Response): Promise<any> {
        const result = await this.assetsManagementService.deleteAsset(id);
        res.status(HttpStatus.OK).json({
            message: "Deleted"+result,
        });
    }
}
