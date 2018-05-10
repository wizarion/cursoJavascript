class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($("#negociacoesView")),
            'adiciona', 'esvazia');

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        
        this._limpaFormulario();   
    }

    importaNegociacoes() {
        
        let negociacaoService = new NegociacaoService();

        negociacaoService.obterNegociacoesDaSemana('retrasada', (err, negociacoes) => {

            if (err) {
                console.log(err);
                this._mensagem.texto = "Não foi possível obter as negociações do servidor.";
                return
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso.";
        });
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Lista de negociações apagada.';
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}