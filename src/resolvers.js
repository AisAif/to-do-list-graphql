import TodoModel from "./models/Todo.js";

export default {
    Query: {
        getAllTodos: async () => {
            return await TodoModel.find();
        },
    },
    Mutation: {
        createTodo: async (_, args) => {
            const todo = new TodoModel(args);
            return await todo.save();
        }
    }
}