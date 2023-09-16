import { TodoAct } from "./todoAct"
function TodoList({ todos,toggleTodo,deleteTodo}) {
    return (
        <>
    <ul className="list">
    {todos.length===0 && "No Todos "}
    {todos.map(todos => {
        return (
            <TodoAct
                {...todos}
                key={todos.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
       )
    })}
            </ul>
            
        </>
    )
}
export {TodoList}