import LoginComponent from "./components/LoginComponent";
import ProfileComponent from "./components/ProfileComponent";
import ThemeComponent from "./components/ThemeComponent";
import TodoComponent from "./components/TodoComponent";
import TodoListComponent from "./components/TodoListComponent";

function App() {
  return (
    <div>
      <ProfileComponent/>
      <LoginComponent/>
      <hr/>
      <ThemeComponent/>
      <hr/>
      <TodoComponent/>
      <hr/>
      <TodoListComponent/>
    </div>
  );
}

export default App;