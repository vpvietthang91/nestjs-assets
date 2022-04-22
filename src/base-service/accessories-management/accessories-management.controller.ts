import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateBaseAccessoriesDto } from 'src/dto/create-baseAccessories.dto';
import { UpdateBaseAccessoriesDto } from 'src/dto/update-baseAccessories.dto';
import { pac_accessories } from 'src/entity/pac_accessories.entity';
import { AccessoriesManagementService } from './accessories-management.service';

@Controller('accessories-management')
export class AccessoriesManagementController {
    constructor(private readonly accessoriesManagementService: AccessoriesManagementService) {}

    @Post('/createAccessories')
    async createAccessories(@Body() post: CreateBaseAccessoriesDto): Promise<pac_accessories> {
        return this.accessoriesManagementService.createAccessories(post);
    }

    @Get('/findAll')
    async findAllAccessories(): Promise<pac_accessories[]> {
        return await this.accessoriesManagementService.findAll();
    }

    @Get('/findAccessoriesById/:id')
    async findAccessoriesByid(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number): Promise<pac_accessories> {
        return this.accessoriesManagementService.findById(id);
    }

    @Get('/findAccessoriesBySerial')
    async findAccessoriesBySerial(@Query('serial') serial: string): Promise<pac_accessories> {
        return this.accessoriesManagementService.findBySerial(serial);
    }

    @Get('/findAccessoriesByCode')
    async findAccessoriesByCode(@Query('code') code: string): Promise<pac_accessories> {
        return this.accessoriesManagementService.findByCode(code);
    }

    @Put('/updateAccessories')
    async updateAccessories(@Body() put: UpdateBaseAccessoriesDto): Promise<pac_accessories> {
        return this.accessoriesManagementService.updateAccessories(put);
    }

    @Put('/deleteAccessories/:id')
    async deleteAccessories(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number, @Res({passthrough: true}) res: Response): Promise<any> {
        const result = await this.accessoriesManagementService.deleteAccessories(id);
        res.status(HttpStatus.OK).json({
            message: "Deleted"+result,
        });
    }
}
