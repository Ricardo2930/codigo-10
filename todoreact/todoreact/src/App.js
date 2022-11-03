import { useState, useEffect } from "react";
import { TaskForm, TaskCard } from "./components";
import { get, post } from "./services";

function App() {
  const [taskList, setTaskList] = useState([]);

  async function getTasks() {
    const tasks = await get();
    setTaskList(tasks);
  }

  async function addTask(text) {
    const newTask = { name: text, status: 1 };
    await post(newTask);
    await getTasks();
  }

  useEffect(() => {
    getTasks();
    // que provoca el []: Que se ejecute solo una vez
  }, []);

  return (
    <div className="container my-5">
      <h1 className="display-3">Todo App</h1>
      <TaskForm onSubmitFunction={addTask} />
      <div className="text-primary">
        <hr />
      </div>
      <div className="mt-5">
        {taskList.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;




