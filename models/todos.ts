export interface UpdatedTodo {
  updatedTask: string
  id: number
}

export interface NewTodo {
  newTask: string
}

export interface Todo {
  id: number
  task: string
  priority: number
  completed: boolean
}
