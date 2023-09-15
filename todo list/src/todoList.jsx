function TodoList(todos) {
    return (
        <>
    <ul className="list">
    {todos.length===0 && "No Todos "}
    {todos.map(todos => {
      return(
      <li key={todos.id}>
      <label>
                  <input type="checkbox" checked={todos.completed}
                    //   onChange={e => { toggleTodo(todos.id, e.target.checked) }}
                  >
                  </input>{todos.title}
              </label>
              <button className="btn btn-danger"
            //       onClick={() => {
            // deleteTodo(todos.id)
            //       }}
              >Delete</button></li>)
    })}
        </ul>
        </>
    )
}
export {TodoList}