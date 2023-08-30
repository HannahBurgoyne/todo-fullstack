import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../apis/apiClient'

import TodoItem from './TodoItem'

function AllTodos() {
  const { data } = useQuery(['todos'], fetchTodos)

  return (
    <ul className="todo-list">
      {data?.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} task={todo.task} />
      ))}
    </ul>
  )
}

export default AllTodos
