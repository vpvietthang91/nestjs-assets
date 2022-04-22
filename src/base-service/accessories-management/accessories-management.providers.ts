import { pac_accessories } from "src/entity/pac_accessories.entity";
import { Connection } from "typeorm";

export const AccessoriesManagementProviders = [
    {
        provide: 'pac_accessories',
        useFactory:(connection: Connection) => connection.getRepository(pac_accessories),
        inject: ['DATABASE_CONNECTION']
    }
]