export interface UpdatedTodo {
  task: string
  id: number
}

export interface NewTodo {
  task: string
}

export interface Todo {
  id: number
  task: string
  primary: number
  completed: boolean
}
