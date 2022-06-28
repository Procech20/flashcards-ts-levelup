import { ApolloServer } from 'apollo-server';
import { context } from './context';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { schema } from './schema';
export const server = new ApolloServer({
	schema,
	context,
	introspection: true,
	plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

const port = process.env.PORT || 8080;

server.listen({ port }).then(({ url }) => {
	console.log(`🚀  Server started and running at ${url}`);
});
