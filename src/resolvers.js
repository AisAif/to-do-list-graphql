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
        },
        updateTodo: async (_, args) => {
            args.updated_at = Date.now();
            const todo = await TodoModel.findByIdAndUpdate(args.    id, args, { new: true });
            return todo;
        }
    }
}