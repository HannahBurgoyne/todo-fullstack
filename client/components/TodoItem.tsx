import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTodos, updateTodo, deleteTodo } from '../apis/apiClient'
import { UpdatedTodo } from '../../models/todos'
import { useState } from 'react'

interface Props {
  id: number
  task: string
}

function TodoItem({ id, task }: Props) {
  const [editing, setEditing] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [todo, setTodo] = useState(task)
  const { data } = useQuery(['todos'], fetchTodos)
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: (updatedTask: UpdatedTodo) => updateTodo(updatedTask),
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
    console.log('editing set to true')
  }

  function handleUpdateEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault()

    const updatedTask = updateMutation.mutate({ id, task })
    setEditing(false)
    setTodo(task)
    console.log('enter pressed')
  }

  function handleCompletedToggle() {}

  return (
    <li
      onDoubleClick={handleStartEditingDblClick}
      className={`${editing ? 'editing' : ''}`}
      key={id} /*toggle completed class*/
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox" /*toggle checked and not checked state*/
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
        value={task}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
    </li>
  )
}

export default TodoItem
