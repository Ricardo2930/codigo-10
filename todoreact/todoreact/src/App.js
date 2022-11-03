import { useState } from "react";
import { TaskForm, TaskCard } from "./components";

function App() {
	const [taskList, setTaskList] = useState([]);

	function addTask(text) {
		const newTask = {
			text: text,
			datetime: new Date(),
		};
// Paso 01: Extraer la info del tasklist
// Paso 02: Agregar la nueva tarea
// Paso 03: Actualizar el estado del tasklist
// Esto se hace para inidcrale que estmos agregando un nuevo valor al setTaskList, por ende provocamos el RENDER

		setTaskList([...taskList, newTask]);
		console.log(taskList);
	}

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
