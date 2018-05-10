class NegociacaoService {

    obterNegociacoesDaSemana(period, callback) {
        
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `negociacoes/${period}`);

        xhr.onreadystatechange = () => {
            
            /** Estados da requisição
             * 0: requisição ainda não iniciada;
             * 1: conexão com o servidor estabelecida;
             * 2: requisição recebida;
             * 3: processando requisição;
             * 4: requisição concluída e resposta está pronta.
             */

             if(xhr.readyState == 4) {

                switch (xhr.status) {
                    case 200:
                        callback(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                        break;
                    default:
                        callback(xhr.responseText)
                        break;
                }
             }
        };

        xhr.send();
    }
}