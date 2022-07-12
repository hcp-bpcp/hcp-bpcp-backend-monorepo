import { DataSource } from 'typeorm';

export const postgresqlProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: 'postgres',
        schema: process.env.SCHEMA_NAME,
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
      });

      return dataSource.initialize();
    },
  },
];
