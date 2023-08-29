import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTodos, updateTodo, deleteTodo } from '../apis/apiClient'
import { UpdatedTodo } from '../../models/todos'

function AllTodos() {
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

  function handleDeleteClick() {}

  function handleUpdateClick() {}

  function handleCompletedToggle() {}

  return (
    <ul className="todo-list">
      {data?.map((todo) => (
        <li key={todo.id} /*toggle completed class*/>
          <div className="view">
            <input
              className="toggle"
              type="checkbox" /*toggle checked and not checked state*/
            />
            <label>{todo.task}</label>
            <button
              /* add onclick to delete here */ className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default AllTodos
