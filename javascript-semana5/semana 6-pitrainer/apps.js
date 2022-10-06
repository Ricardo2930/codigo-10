// DOM: Objeto que representa al modelo del documento (etstructura jerarquica de varios elementos) HTML
// Los objetos tiene atrbutos (propiedades) y métdos (funciones), vamos a poder que informacion y datos, luego modificar, manipular elementos, estilos
// Desde JS interactuar con mi eklmento es GetElementByID().innerText (Actua con el texto del elemento)

// Escribir u texto dentro del elemento
document.getElementById("div_container").innerText = "Hola a Todos";

// El navegador le da vida a JS

function test () {
    document.getElementById("div_container").classList.add("big");
}


function remove () {
    document.getElementById("div_container").classList.remove("big");
}

// Selector de variso elementos (parrafos)
const parrafos = document.getElementsByTagName("p");
console.log (parrafos);


const array_parrafos = document.querySelectorAll("p");
console.log(array_parrafos);
// for each: permite recorrer los elementos para manipular, metodo de arreglo
array_parrafos.forEach((p) => {
    p.onclick = function () {
        p.innerText = "bruno"
        p.classList.add("big")

        }
    }
)


const nombre = document.getElementById("input_name");
nombre.addEventListener("keyup",function(){
    const text = nombre.value;
    array_parrafos.forEach((p) => {
        p.innerText = text;
    })


})