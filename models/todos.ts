export interface UpdatedTodo {
  updatedTask: string
  id: number
}

export interface NewTodo {
  task: string
  priority: string
  completed: boolean
}

export interface Todo extends NewTodo {
  id: number
}
