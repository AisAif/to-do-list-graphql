# TO DO LIST GRAPHQL

## Running Server
### Dev Mode (Using Nodemon)
```
npm run dev
```
### Production Mode
```
npm run start
```

## API Docs
### Endpoint
/graphql
### Query and Mutation Example
```
query GetAllTodos {
  getAllTodos {
    id
    title
    description
    completed
    created_at
    updated_at
  }
}

query GetTodo($getTodoId: ID!) {
  getTodo(id: $getTodoId) {
    id
    title
    description
    completed
    created_at
    updated_at
  }
}

mutation CreateTodo($createTodoTitle: String!) {
  createTodo(title: $createTodoTitle) {
    id
    title
    description
    completed
    created_at
    updated_at
  }
}

mutation ToggleTodo($toggleTodoId: ID!) {
  toggleTodo(id: $toggleTodoId) {
    id
    title
    description
    completed
    created_at
    updated_at
  }
}

mutation UpdateTodo($updateTodoId: ID!, $title: String) {
  updateTodo(id: $updateTodoId, title: $title) {
    id
    title
    description
    completed
    created_at
    updated_at
  }
}

mutation DeleteTodo($deleteTodoId: ID!) {
  deleteTodo(id: $deleteTodoId)
}
```

### Response Example
```
{
  "data": {
    "getAllTodos": [
      {
        "id": "65c2fe85956f09c4e6de28d1",
        "title": "Build Database On My Project",
        "description": "Start Build Database Migration For My Project",
        "completed": false,
        "created_at": "1707277957468",
        "updated_at": "1707277957468"
      },
      {
        "id": "65c33bf891e62d64cf9efcd4",
        "title": "Example Todo",
        "description": null,
        "completed": false,
        "created_at": "1707293688684",
        "updated_at": "1707293688684"
      }
    ]
  }
}
```