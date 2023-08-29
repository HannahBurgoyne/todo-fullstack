import { useQueryClient } from '@tanstack/react-query'
import { addTodo } from '../apis/apiClient'
import { NewTodo } from '../../models/todos'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const queryClient = useQueryClient()

  // const addMutation = useMutation({
  //   mutationFn: (addedTask: NewTodo) => addTodo(addedTask),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['todos'])
  //   },
  // })

  // function handleAddClick() {}

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
      />
    </>
  )
}

export default AddTodo
