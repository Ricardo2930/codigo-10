// una clase en JS es un objeto, todo en Js es un objetos (clase, array, etc)
// No permite poner un constructor una funcion que es solamente para clases solamente dentro.

/* Reglas de la clase:
1. Debemos recibir 3 paramentros cuando iniciemos esta
2. Tendremos 3 estados
    *status 1=crete
    *status 2=done
    *status3=delete
3.Tendremos una funcion para poder renderizar nuesta tarea (poder html pintarlo en la vista que la vea el cliente)
4.Tendremos una funcion para poder actualizar nuesta tarea
5.Tendremos una funcion para poder eliminar nuesta tarea
---PROCESO CRUD --> CREATE - READ - UPDATE - DELETE ---
*/

// Instanciar: es llamar a una clase
// esta es la forma que instanciamos a la clase task
// Cuando instanciamos siempre va NEW adelante

// const task = new task ("Tarea1", new Date(),1);

// !Importante: Siempre una clase inicia con mayuscula

// Para poder usar import de este archivo, debemos decir que nuestra clase sea exportable, que pueda ser usada desde otro archivo----export class task
// export

class Task {
    // Estos son parametros (name,date,status)
    // constructor (nombre de la tarea, fecha)
    constructor (id, name, date, status) {
    // crear una variable en una clase "this._name, es una variable contenedora".
    // Una variable dentro de la clase no es necesario poner let o var o const, solo con THIS.
    this._id = id;
    this._name = name;
    this._date = date;
    this._status = status;
    }
// en una clase no es necesario poner function para crear una.
// La funcion Render contiene todo el HTML
static destroyRender(id) {
const element = document.querySelector(`#task-${id}`);
    element.remove ();
}


render () {
    // todo lo de abajo se llama TEMPLATE STRING
    return `<div id="task-${this._id} class="item_task">
    <input type="checkbox">
    <h6>${this._name}</h6>
    <button>
    <img src="./images/edit.png" width="20" alt="">
    </button>
    <button onclick="destroy(${this._id})">
    <img src="./images/delete.png" width="20" alt="">
    </button>
    </div>`;
}

}

// // COMO LLAMAR A UNA FUNCION
// function suma (){....}
// suma();

// class Persona {
//     constructor(nombres) {
//         this.nombres = nombres;
//     }
// }

// const persona = new Persona ("Ricardo");

// console.log (persona.nombres);