import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTodo } from '../apis/apiClient'
import { NewTodo } from '../../models/todos'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [eraseValue, setEraseValue] = useState(false)
  const [form, setForm] = useState('')
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: (newTask: NewTodo) => addTodo(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  function handleAddEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.target)

    e.preventDefault()

    const newTask = e.target.value
    console.log(newTask)

    addMutation.mutate(newTask)
    setForm('')
    console.log('enter pressed in add')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(e.target.value)
  }

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={form}
        type="text"
        name="task"
        autoFocus={true}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddEnter(e)
          }
        }}
        onChange={(e) => handleChange(e)}
      />
    </>
  )
}

export default AddTodo
