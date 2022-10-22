class Card extends HTMLElement {
	constructor() {
		super();
		this.class = "card p-3";
	}

	static get observedAttributes() {
		return ["class", "classname", "shadow"];
	}

	attributeChangedCallback(prop, oldvalue, newvalue) {
		this[prop] = newvalue;
		if (prop == "shadow") {
			this.classList.remove("shadow");
			if (newvalue == "true") this.classList.add("shadow");
		}
	}

	// Cuando este elemento sea llamado a Renderizarse:
	connectedCallback() {
        // Con este if hago referencia al this.class del super, para luego crear una const classList = this.class.split(""), el split convierte convierte el tipo string agregado. agarra al array para separarlo segun lo que separa los elementos del array
		if (this.class) {
			const lista_de_clases = this.class.split(" ");
			lista_de_clases.forEach((xclass) => {
				this.classList.add(xclass);
			});
		}

		if (this.classname) {
			const lista_de_clases = this.classname.split(" ");
			lista_de_clases.forEach((xclass) => {
				this.classList.add(xclass);
			});
		}
	}

	// Cuando este elemento sea quitado de la renderización:
	disconnectedCallback() {}
}

customElements.define("my-card", Card);
