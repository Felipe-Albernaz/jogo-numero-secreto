const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoMensagem = document.querySelector('#mensagem');

var recognition = new SpeechRecognition();


recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak);
    
function onSpeak(evento){
    const resultado = evento.results[0][0].transcript;
    exibirPalpite(resultado);
    validaPalpite(resultado);
}


function exibirPalpite(valor){
    elementoMensagem.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${valor}</span>
    `;
}


recognition.addEventListener('end', ()=> recognition.start());