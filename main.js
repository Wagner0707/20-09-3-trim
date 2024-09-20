document.querySelector('.parametro-senha__botao');
const numeroSenha = document.querySelector('.parametro-senha__texto');
numeroSenha.textContent = tamanhoSenha;
const botoes = document.querySelector('.parametro-senha__botao');
botoes[0].onclick = diminuiTamanho;
console.log(botoes);
function diminuiTamanho(){
}
const numeroSenha = document.querySelector('.parametro-senha__texto');
    let tamanhoSenha = 12;
    function diminuiTamanho(){
        if (tamanhoSenha > 1)
        tamanhoSenha = tamanhoSenha - 1;
        numeroSenha.textContext = tamanhoSenha
        }
        function aumentaTamanho() {
            if (tamanhoSenha < 20) {
            tamanhoSenha = tamanhoSenha + 1;
            }
            numeroSenha.textContent = tamanhoSenha;
            }
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
