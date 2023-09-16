import "./styles.css"
import { useEffect, useState } from "react"
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";
function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("Activity")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("Activity", JSON.stringify(todos))
  }, [todos])
  
  function addTodo(title) {
     setTodos((currentTodos) => {
          return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]
        })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todos=>todos.id !== id)
    })
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      // Map through the todos array and find the matching todo item
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          // Create a new todo object with the updated completed status
          return { ...todo, completed };
        } else {
          // Return the original todo object if it's not the one to be updated
          return todo;
        }
      });
    });
  }
  return (
    <>
    <TodoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>)
}

export default App
