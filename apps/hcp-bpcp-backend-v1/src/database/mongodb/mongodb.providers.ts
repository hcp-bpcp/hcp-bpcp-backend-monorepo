import mongoose from 'mongoose';

export const mongodbProviders = [
  {
    provide: 'DOC_SOURCE',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGO_CONN_INFO),
  },
];
