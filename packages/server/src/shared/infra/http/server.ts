import { ApolloServer } from 'apollo-server-express';
import '@shared/infra/typeorm';

import { auth } from '../graphql/context/auth';
import { getSchema } from '../graphql/schema';
import { app } from './app';

async function main() {
  const schema = await getSchema();

  const server = new ApolloServer({
    schema,
    playground: true,
    context: auth,
  });

  server.applyMiddleware({ app, cors: false });

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

main().catch((err) => {
  console.error(err);
});
