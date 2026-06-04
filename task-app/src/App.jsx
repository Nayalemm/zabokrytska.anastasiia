import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Header />
      <TaskForm />
      <Statistics />
      <TaskList />
      <Footer />
    </TaskProvider>
  );
}

export default App;