function validarTexto(valor, nomeCampo) {
    var texto = String(valor || '').trim();

    while (texto === '') {
        alert('O campo "' + nomeCampo + '" não pode ficar vazio.');
        texto = String(prompt('Digite o ' + nomeCampo + ':') || '').trim();
    }

    return texto;
}

function validarNumero(valor, nomeCampo) {
    var numero = Number(valor);

    while (isNaN(numero) || numero < 0) {
        alert('Digite um valor numérico válido para "' + nomeCampo + '".');
        numero = Number(prompt('Digite o ' + nomeCampo + ':'));
    }

    return numero;
}

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    if (safra >= 2020) {
        return 'jovem';
    }

    if (safra >= 2015) {
        return 'amadurecido';
    }

    return 'antigo';
}

function mostrarDetalhes(nome, tipo, safra, quantidade) {
    var statusEstoque = estoqueBaixo(quantidade) ? 'ESTOQUE BAIXO' : 'ESTOQUE ADEQUADO';
    var categoria = classificarVinho(safra);

    console.log('==== CADASTRO DO VINHO ====');
    console.log('Nome: ' + nome);
    console.log('Tipo: ' + tipo);
    console.log('Safra: ' + safra);
    console.log('Quantidade: ' + quantidade);
    console.log('Classificação: ' + categoria);
    console.log('Status: ' + statusEstoque);

    alert('Cadastro realizado com sucesso!\n\n' +
        'Nome: ' + nome + '\n' +
        'Tipo: ' + tipo + '\n' +
        'Safra: ' + safra + '\n' +
        'Quantidade: ' + quantidade + '\n' +
        'Classificação: ' + categoria + '\n' +
        'Status: ' + statusEstoque);
}

function iniciarCadastroDeVinhos() {
    var continuarCadastro = 'S';
    var contadorCadastros = 0;
    var quantidadeBaixa = 0;
    var safraMaisAntiga = 9999;
    var nomeSafraAntiga = '';

    while (continuarCadastro === 'S' || continuarCadastro === 's') {
        var nomeDoVinho = validarTexto(prompt('Digite o nome do vinho:'), 'nome do vinho');
        var tipoDoVinho = validarTexto(prompt('Digite o tipo do vinho (Tinto, Branco ou Rose):'), 'tipo do vinho');
        var tipoFormatado = tipoDoVinho.toLowerCase();

        while (tipoFormatado !== 'tinto' && tipoFormatado !== 'branco' && tipoFormatado !== 'rose') {
            alert('Tipo inválido. Escolha entre Tinto, Branco ou Rose.');
            tipoDoVinho = validarTexto(prompt('Digite o tipo do vinho (Tinto, Branco ou Rose):'), 'tipo do vinho');
            tipoFormatado = tipoDoVinho.toLowerCase();
        }

        tipoDoVinho = tipoDoVinho.charAt(0).toUpperCase() + tipoDoVinho.slice(1).toLowerCase();

        var safraDoVinho = validarNumero(prompt('Digite a safra do vinho:'), 'safra do vinho');

        while (safraDoVinho < 1900 || safraDoVinho > 2100) {
            alert('Safra fora do intervalo esperado. Insira uma safra entre 1900 e 2100.');
            safraDoVinho = validarNumero(prompt('Digite a safra do vinho:'), 'safra do vinho');
        }

        var quantidadeEmEstoque = validarNumero(prompt('Digite a quantidade em estoque:'), 'quantidade em estoque');

        contadorCadastros = contadorCadastros + 1;

        if (estoqueBaixo(quantidadeEmEstoque)) {
            quantidadeBaixa = quantidadeBaixa + 1;
        }

        if (safraDoVinho < safraMaisAntiga) {
            safraMaisAntiga = safraDoVinho;
            nomeSafraAntiga = nomeDoVinho;
        }

        mostrarDetalhes(nomeDoVinho, tipoDoVinho, safraDoVinho, quantidadeEmEstoque);

        continuarCadastro = validarTexto(prompt('Deseja cadastrar outro vinho? (S/N)'), 'opção de cadastro').toUpperCase();

        while (continuarCadastro !== 'S' && continuarCadastro !== 'N') {
            alert('Resposta inválida. Digite apenas S para sim ou N para não.');
            continuarCadastro = validarTexto(prompt('Deseja cadastrar outro vinho? (S/N)'), 'opção de cadastro').toUpperCase();
        }
    }

    var mensagemFinal = 'Resumo final:\n' +
        'Quantidade de cadastros: ' + contadorCadastros + '\n' +
        'Vinhos com estoque baixo: ' + quantidadeBaixa + '\n' +
        'Vinho com a safra mais antiga: ' + nomeSafraAntiga + ' (' + safraMaisAntiga + ')';

    console.log(mensagemFinal);
    alert(mensagemFinal);
}

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', iniciarCadastroDeVinhos);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validarTexto,
        validarNumero,
        estoqueBaixo,
        classificarVinho,
        mostrarDetalhes,
        iniciarCadastroDeVinhos
    };
}
