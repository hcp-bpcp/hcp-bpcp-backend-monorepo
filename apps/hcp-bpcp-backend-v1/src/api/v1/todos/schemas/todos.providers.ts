import { Connection } from 'mongoose';
import { TodoSchema } from './todos.schema';

export const todosProviders = [
  {
    provide: 'TODO_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Todo', TodoSchema),
    inject: ['DOC_SOURCE'],
  },
];
