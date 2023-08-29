import request from 'superagent'
import { NewTodo, Todo } from '../../models/todos'

const baseUrl = '/api/v1/todos/'

// CREATE

export async function addTodo(newTodo: NewTodo) {
  await request.post(baseUrl).send(newTodo)
}

// READ

export async function fetchTodos() {
  const data = await request.get(baseUrl)

  return data.body as Todo[]
}

// UPDATE

export async function updateTodo(updatedTodo: object, id: number) {
  await request.patch(`${baseUrl}${id}`).send(updatedTodo)
}

// DELETE

export async function deleteTodo(id: number) {
  await request.delete(`${baseUrl}${id}`)
}
