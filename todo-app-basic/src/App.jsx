import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  // This is same as value={{todoItems: todoItems,addNewItem: addNewItem,deleteItem: deleteItem}} as value={{todoItems,addNewItem,deleteItem,}}
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
