import TodoModel from "./models/Todo.js";

export default {
    Query: {
        getAllTodos: async () => {
            return await TodoModel.find();
        }
    }
}