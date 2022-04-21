import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBaseAssetsDto } from 'src/dto/create-baseAssets.dto';
import { UpdateBaseAssetsDto } from 'src/dto/update-baseAssets.dto';
import { pac_assets } from 'src/entity/pac_assets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetsManagementService {
    constructor(
        @Inject('pac_assets')
        private pacAssets: Repository<pac_assets>
    ) {}

    createAsset(post: CreateBaseAssetsDto): Promise<pac_assets> {
        const newAsset = this.pacAssets.create(post);
        console.log(newAsset);
        return this.pacAssets.save(newAsset);
    }

    findAll(): Promise<pac_assets[]> {
        return this.pacAssets.find();
    }

    async findById(id: number): Promise<pac_assets> {
        const assets = await this.pacAssets.findOneById(id);
        if(!assets) {
            throw new InternalServerErrorException('Not found record with id: '+id);
        }
        return assets;
    }

    async findBySerial(serial: string): Promise<pac_assets> {
        try {
            const asset = await this.pacAssets.createQueryBuilder("asset").where("asset.serial = :serialFind", {serialFind: serial}).getOne();
            return asset;
        }catch(err) {
            throw err;
        }
    }

    async findByCode(code: string): Promise<pac_assets> {
        try {
            const asset = await this.pacAssets.createQueryBuilder("asset").where("asset.asset_code = codeFind", {codeFind: code}).getOne();
            return asset;
        }catch(err) {
            throw err;
        }
    }

    async updateAsset(put: UpdateBaseAssetsDto): Promise<pac_assets> {
        const updateAsset = await this.pacAssets.findOneById(put.id)
        if(!updateAsset) {
            throw new InternalServerErrorException('Not found record with asset code '+put.assets_code);
        }
        updateAsset.assets_name = put.assets_name;
        updateAsset.serial = put.serial;
        updateAsset.assets_code = put.assets_code;
        updateAsset.assets_category = put.assets_category;
        updateAsset.assets_model = put. assets_model;
        updateAsset.assets_status = put.assets_status;
        updateAsset.assets_tag = put.assets_tag;
        updateAsset.checkout_to = put.checkout_to;
        updateAsset.check_io = put.check_io;
        updateAsset.is_deleted = put.is_deleted;
        updateAsset.department = put.department;
        updateAsset.direct_manager = put.direct_manager;
        updateAsset.check_io_date = new Date;
        updateAsset.update_by = put.update_by;
        updateAsset.update_date = new Date;

        return this.pacAssets.save(updateAsset);
    }

    async deleteAsset(id: number): Promise<any> {
        const deleteAsset = await this.pacAssets.findOneById(id);
        if(!deleteAsset) {
            throw new InternalServerErrorException('Not found record with asset code '+id);
        }
        deleteAsset.is_deleted = false;
        this.pacAssets.save(deleteAsset);
        return deleteAsset.assets_code;
    }
}
