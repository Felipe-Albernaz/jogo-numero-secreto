function validaPalpite(valor){
    if(valorInvalido(valor)){
        elementoMensagem.innerHTML += `
        <div><font color='#ff0000'>'${valor}'</font> não é um numero válido!</div>
        `;
        return
    }  

    if(verificaValorMaiorMenorPermitido(valor)){
        elementoMensagem.innerHTML += `
        <div>Valor esta fora do permitido!</div>
        `;
        return
    }

    if(acertou(valor)){
        document.querySelector('body').innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era <u>${valor}</u></h3>
        <button class="jogar-novamente">Jogar novamente</button.
        `;
        const botao = document.querySelector('.jogar-novamente').addEventListener('click', ()=>{
            window.location.reload();
        })
    }else if(valor < numeroSorteado){
        elementoMensagem.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
    `;
    }else{
        elementoMensagem.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
    `;
    } 
}


function valorInvalido(v){
    const numero = parseInt(v);
    return Number.isNaN(numero);
}

function verificaValorMaiorMenorPermitido(v){
    return v > maior_valor || v < menor_valor;
    
}

function acertou(v){
    return v == numeroSorteado;
}




