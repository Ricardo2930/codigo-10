// Es una clase porque va a extender de HTMLElement
// HTMLElement: es una clase nativa de JS

// extends hace que HTMLElement le comparta sus funciones a Card
class Card extends HTMLElement {
    // como esta clase tiene un extends requerimos usar
    constructor () {
        // usando super() es una funcion nativa para crear propiedades o atributos propios
        super();
        this.title = "";
        this.message = "";
        this.img = "";

    }

    // Para poder recibir parametros desde Html (Mapear que atributos son permitidos)
    // get, significa 
    static get observedAttributes () {
        // En esta funcion vamos a definir que parametros acepta nuestro componente
        // Para poder saber quienes son vamos a definirlos en un array
        return ["title","message","img"];
    }
    // Para guardar el valor que estamos recibiendo
    attributeChangedCallback (name, oldvalue, newvalue) {
    // name= nombre del atributo
    // oldvalue= es el valor actual
    // newvalue=es el nuevo valor que estamos recibiendo
    switch (name) {
        case "title":
          this.title = newvalue;
          break;
        case "img":
          this.img = newvalue;
          break;
        case "message":
          this.message = newvalue;
          break;
        default:
          break;
            }
        }

            


    // Para poder asignar HTML dentro de mi Tag
    // debemos llamar a la funcion conectedCallback()

    // Esta funcion se ejecuta de forma automatica, cuando nuestro componente se crea en HTML

    connectedCallback () {
        this.classList.add("col-12", "col-sm-4", "col-md-3");
        this.innerHTML = 
        `<div class="card mt-5">
             <img width="100%" class="card-img-top" src="${this.img}" />

        <div class="card-body">
                <h4 class="card-title">${this.title}</h4>
                <p class="card-text">${this.message}</p>
                <button class="btn btn-link">Leer mas</button>
                
            </div>
        </div>
        `;
        }   
    }

// my-card es la nueva etiqueta creada o elemento customizable.




customElements.define("my-card",Card);