class HttpService {
    
    get(url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
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
                            resolve(JSON.parse(xhr.responseText));
                            break;
                        default:
                            reject(xhr.responseText);
                            break;
                    }
                 }
            };
            xhr.send();
        });

    }

    post(url, dado) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader("Content-type", "application/json");
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
                            resolve(JSON.parse(xhr.responseText));
                            break;
                        default:
                            reject(xhr.responseText);
                            break;
                    }
                 }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
        });

    }
}