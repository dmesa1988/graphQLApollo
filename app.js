const http = require('http')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const app = express()

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            models
        }
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: 3500 }, resolve));
    console.log(`🚀 Server ready at http://localhost:3500${server.graphqlPath}`);
}

(async () => {
    await startApolloServer(typeDefs, resolvers)
})()