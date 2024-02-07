import { gql } from "apollo-server";

const typeDefs = gql`
    type Todo {
        id: ID!,
        title: String!,
        description: String,
        completed: Boolean,
        created_at: String,
        updated_at: String
    }

    type Query {
        getAllTodos: [Todo]!,
    }
`

export default typeDefs
