class MensagemView extends View {

    /* O método constructor não é necessário se pai e filho tiverem a mesma quantidade de parâmetros */
    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return model.texto ? `<p class="alert alert-success">${model.texto}</p>` : '<p></>';
    }
    
}