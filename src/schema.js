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
        getTodo(id: ID!): Todo
    }

    type Mutation {
        createTodo(title: String!, description: String): Todo!,
        toggleTodo(id: ID!): Todo,
        updateTodo(id: ID!, title: String, description: String): Todo,
        deleteTodo(id: ID!): Boolean,
    }
`

export default typeDefs
