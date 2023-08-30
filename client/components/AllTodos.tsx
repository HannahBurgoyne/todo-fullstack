import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTodos, updateTodo, deleteTodo } from '../apis/apiClient'
import { UpdatedTodo } from '../../models/todos'
import { useState } from 'react'

function AllTodos(task) {
  const [editing, setEditing] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [text, setText] = useState(task)
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
    setText(task)
    console.log('enter pressed')
  }

  function handleCompletedToggle() {}

  return (
    <ul className="todo-list">
      {data?.map((todo) => (
        <li
          onDoubleClick={handleStartEditingDblClick}
          className={`${editing ? 'editing' : ''}`}
          key={todo.id} /*toggle completed class*/
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox" /*toggle checked and not checked state*/
            />
            <label>{todo.task}</label>
            <button
              onClick={(e) => handleDeleteClick(e, todo.id)}
              className="destroy"
            ></button>
          </div>
          <input
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUpdateEnter()
              }
            }}
            className="edit"
            type="text"
            value={todo.task}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </li>
      ))}
    </ul>
  )
}

export default AllTodos
