const menor_valor = 1;
const maior_valor = 1000;

document.querySelector('#menor-valor').innerHTML = menor_valor;
document.querySelector('#maior-valor').innerHTML = maior_valor;

const numeroSorteado = geraNumeroAleatorio();
console.log(numeroSorteado);

function geraNumeroAleatorio(){
    return Math.floor(Math.random() * maior_valor + 1);
}


