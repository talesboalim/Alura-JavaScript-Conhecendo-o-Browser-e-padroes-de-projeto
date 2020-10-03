class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        throw new Error('O método templete deve ser implementado');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}