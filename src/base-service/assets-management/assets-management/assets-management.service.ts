import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBaseAssetsDto } from 'src/dto/create-baseAssets.dto';
import { pac_assets } from 'src/entity/pac_assets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetsManagementService {
    constructor(
        @Inject('pac_assets')
        private pacAssets: Repository<pac_assets>
    ) {}

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

    createAsset(post: CreateBaseAssetsDto): Promise<pac_assets> {
        const newAsset = this.pacAssets.create(post);
        console.log(newAsset);
        return this.pacAssets.save(newAsset);
    }
}
