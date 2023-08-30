import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTodo, deleteTodo } from '../apis/apiClient'
import { UpdatedTodo } from '../../models/todos'
import { useState } from 'react'

interface Props {
  id: number
  task: string
}

function TodoItem({ id, task }: Props) {
  const [editing, setEditing] = useState(false)
  const [completed, setCompleted] = useState(false)
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: (task: UpdatedTodo) => updateTodo(task),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  function handleDeleteClick(
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) {
    e.preventDefault()
    deleteMutation.mutate(id)
  }

  function handleStartEditingDblClick() {
    setEditing(true)
  }

  function handleUpdateEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault()

    const updatedTask = e.target.value

    updateMutation.mutate({ id, updatedTask })
    setEditing(false)
    console.log('enter pressed')
  }

  return (
    <li
      onDoubleClick={handleStartEditingDblClick}
      className={`${editing ? 'editing' : ''} ${completed ? 'completed' : ''}`}
      key={id}
    >
      <div className="view">
        <input
          onClick={() => setCompleted(!completed)}
          className="toggle"
          type="checkbox"
        />
        <label>{task}</label>
        <button
          onClick={(e) => handleDeleteClick(e, id)}
          className="destroy"
        ></button>
      </div>
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUpdateEnter(e)
          }
        }}
        className="edit"
        type="text"
        name="task"
        placeholder={task}
      ></input>
    </li>
  )
}

export default TodoItem
