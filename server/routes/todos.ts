import express from 'express'
import { addTodo, getAllTodos, deleteTodo, updateTodo } from '../db/db'

const router = express.Router()

// CREATE
router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    await addTodo(newTodo)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message)
    }
  }
})

// READ
router.get('/', async (req, res) => {
  try {
    const todos = await getAllTodos()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message)
    }
  }
})

// UPDATE
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedTodo = req.body
    await updateTodo(updatedTodo, id)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message)
    }
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deleteTodo(id)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message)
    }
  }
})

export default router
