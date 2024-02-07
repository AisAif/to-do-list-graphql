import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import dotenv from "dotenv";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

dotenv.config()

// connect to database
mongoose.connect(process.env.MONGODB_URL, {})

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(
    { port: process.env.PORT || 4000 },
).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})