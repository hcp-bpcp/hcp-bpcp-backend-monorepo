import { DataSource } from 'typeorm';
import { User } from '../../api/v1/users/entities/users.entity';

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
        // entities: ['dist/**/*.entity{.ts,.js}'],
        // entities: [join(__dirname, '../../../**', '*.entity.{ts,js}')],
        entities: [User],
        synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
      });

      return dataSource.initialize();
    },
  },
];
