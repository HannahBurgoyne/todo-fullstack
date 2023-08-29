import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../apis/apiClient'

function AllTodos() {
  const { data } = useQuery(['todos'], fetchTodos)

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
