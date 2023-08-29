import connection from './connection'
import { NewTodo, Todo } from '../../models/todos'

//CREATE
export function addTodo(newTodo: NewTodo, db = connection): Promise<Todo[]> {
  return db<Todo>('todos').insert(newTodo)
}

//READ
export function getAllTodos(db = connection): Promise<Todo[]> {
  return db<Todo>('todos').select()
}

//UPDATE
export function updateTodo(
  updatedTodo: object,
  id: number,
  db = connection
): Promise<Todo[]> {
  return db<Todo>('todos').where('id', id).update(updatedTodo)
}

//DELETE
export function deleteTodo(id: number, db = connection): Promise<Todo[]> {
  return db<Todo>('todos').where('id', id).del()
}
