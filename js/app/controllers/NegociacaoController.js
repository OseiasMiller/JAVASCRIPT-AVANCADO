class NegociacaoController {

    constructor () {
        
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }

    adiciona (event) {
        event.preventDefault();

        // console.log(this._inputQuantidade.value, this._inputData.value, this._inputValor.value);
        
        let negociacao = new Negociacao(
            this._inputData.value, 
            this._inputQuantidade.value,
            this._inputValor.value
        )
        
    }

}