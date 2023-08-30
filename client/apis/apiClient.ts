import request from 'superagent'
import { NewTodo, Todo, UpdatedTodo } from '../../models/todos'

const baseUrl = '/api/v1/todos/'

// CREATE

export async function addTodo(newTodo: NewTodo) {
  await request.post(baseUrl).send({ task: newTodo })
}

// READ

export async function fetchTodos() {
  const data = await request.get(baseUrl)

  return data.body as Todo[]
}

// UPDATE

export async function updateTodo({ updatedTask, id }: UpdatedTodo) {
  await request.patch(`${baseUrl}${id}`).send({ task: updatedTask })
}

// DELETE

export async function deleteTodo(id: number) {
  await request.delete(`${baseUrl}${id}`)
}
