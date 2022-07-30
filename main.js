function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log("Elemento não encontrado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {
//let contador = 0;
//while (contador < listaDeTeclas.length){
    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;    //Template string
    teclas.onclick = function () {
        tocaSom(idAudio);
    }
    teclas.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code == 'Enter')
            teclas.classList.add('ativa');
    }
    teclas.onkeyup = function () {
        teclas.classList.remove('ativa');
    }
//    contador = contador + 1;
}