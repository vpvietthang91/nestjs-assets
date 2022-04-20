import { pac_assets } from "src/entity/pac_assets.entity"
import { Connection } from "typeorm"

export const AssetsManagementProviders = [
    {
        provide: 'pac_assets',
        useFactory:(connection: Connection) => connection.getRepository(pac_assets),
        inject: ['DATABASE_CONNECTION']
    }
    

]