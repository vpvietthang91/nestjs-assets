import { createConnection } from "typeorm"

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: "postgres",
            host: "127.0.0.1",
            port: 5432,
            username: "postgres",
            password: "Matkhaucap10!",
            database: "pac_db",
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
            extra: {
                trustServerCertificate: true,
            }
        }),
    },
]