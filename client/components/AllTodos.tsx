function AllTodos() {
  return (
    <ul className="todo-list">
      <li /*toggle completed class*/>
        <div className="view">
          <input
            className="toggle"
            type="checkbox" /*toggle checked and not checked state*/
          />
          <label>Sample Task</label>
          <button /* add onclick to delete here */ className="destroy"></button>
        </div>
      </li>
    </ul>
  )
}

export default AllTodos
