// importo la clase Task
// import { Task } from "./task.js";

// Creo arreglos vacios




const inputTask = document.querySelector (".input_task");
const btnCreate = document.querySelector (".btn_create");
const listTask = document.querySelector (".container_lista_task");

let arrayTasks = [];

// el onclick es un evento que hacemos clik y active la function btnCreate
// Cuando una function no tiene nombre (), se llama function "anonima" o "anonymous function"
btnCreate.onclick = function () {
    // el .value sirve para obtener el texto de input.task
    const taskText = inputTask.value;
    // console.log("taskText",taskText)

    if (taskText === "") {
        alert ("Debe completar la caja de texto");
        return;
        // return; retorna y valor y finaliza o rompe la funcion
    }
    // new Date() la informacion lo obtiene de la PC
    // const task hace llamado a la clase, con eso puedes ingresar.
    const task = new Task (arrayTasks.length + 1 , taskText, new Date(), 1)
    // push sirve para agregar un elemento a un array
    arrayTasks.push(task);
    // console.log (arrayTasks);
    listTask.innerHTML += task.render();

    inputTask.value = "";
};

// Prototype: objeto que contiene que funciones que el array puede acceder

function destroy(id) {
    // como podemos eliminar un elemento de un array
    // En la condicion podemos decir que traiga todos los elemenots menos el que tenga
    // el id que estamos recibiendo
    //? Que retorna filter? = Array
    const filterTask = arrayTasks.filter((task) => task._id !== Number(id));
    // Acá estamos diciendo que el valor. de arrayTask. es ahora filterTask
    arrayTasks = filterTask;
    Task.destroyRender(id);
}