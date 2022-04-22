import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBaseAccessoriesDto } from 'src/dto/create-baseAccessories.dto';
import { UpdateBaseAccessoriesDto } from 'src/dto/update-baseAccessories.dto';
import { pac_accessories } from 'src/entity/pac_accessories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccessoriesManagementService {
    constructor(
        @Inject('pac_accessories')
        private pacAccessories: Repository<pac_accessories>
    ) {}

    createAccessories(post: CreateBaseAccessoriesDto): Promise<pac_accessories> {
        const newAccessories = this.pacAccessories.create(post);
        console.log(newAccessories);
        return this.pacAccessories.save(newAccessories);
    }

    findAll(): Promise<pac_accessories[]> {
        return this.pacAccessories.find();
    }

    async findById(id: number): Promise<pac_accessories> {
        const accessories = await this.pacAccessories.findOneById(id);
        if(!accessories) {
            throw new InternalServerErrorException('Not found record with id: '+id);
        }
        return accessories;
    }

    async findBySerial(serial: string): Promise<pac_accessories> {
        try {
            const accessories = await this.pacAccessories.createQueryBuilder("accessories").where("accessories.serial = :serialFind", {serialFind: serial}).getOne();
            return accessories;
        }catch(err) {
            throw err;
        }
    }

    async findByCode(code: string): Promise<pac_accessories> {
        try {
            const accessories = await this.pacAccessories.createQueryBuilder("accessories").where("accessories.accessories_code = :codeFind", {codeFind: code}).getOne();
            return accessories;
        }catch(err) {
            throw err;
        }
    }

    async updateAccessories(put: UpdateBaseAccessoriesDto): Promise<pac_accessories> {
        const updateAccessories = await this.pacAccessories.findOneById(put.id)
        if(!updateAccessories) {
            throw new InternalServerErrorException('Not found record with accessories code '+put.accessories_code);
        }
        updateAccessories.accessories_name = put.accessories_name;
        updateAccessories.serial = put.serial;
        updateAccessories.accessories_code = put.accessories_code;
        updateAccessories.accessories_category = put.accessories_category;
        updateAccessories.accessories_model = put.accessories_model;
        updateAccessories.accessories_status = put.accessories_status;
        updateAccessories.accessories_tag = put.accessories_tag;
        updateAccessories.checkout_to = put.checkout_to;
        updateAccessories.check_io = put.check_io;
        updateAccessories.is_deleted = put.is_deleted;
        updateAccessories.department = put.department;
        updateAccessories.direct_manager = put.direct_manager;
        updateAccessories.check_io_date = new Date;
        //updateAsset.update_by = put.update_by;
        //updateAsset.update_date = new Date;
        updateAccessories.assets_mount = put.assets_mount;

        return this.pacAccessories.save(updateAccessories);
    }

    async deleteAccessories(id: number): Promise<any> {
        const deleteAccessories = await this.pacAccessories.findOneById(id);
        if(!deleteAccessories) {
            throw new InternalServerErrorException('Not found record with accessories code '+id);
        }
        deleteAccessories.is_deleted = false;
        this.pacAccessories.save(deleteAccessories);
        return deleteAccessories.accessories_code;
    }
}
