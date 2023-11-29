const imagens = [
    'imgs/costas.png',
    'imgs/rostoperfil.png',
    'imgs/pernas.png',
    'imgs/mao1.png',
    'imgs/mao2.png',
];
function escolherImagemAleatoria() {

    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    const imagemSelecionada = imagens[indiceAleatorio];
    document.getElementById('fundo-jogo').style.backgroundImage = `url(${imagemSelecionada})`;
}
escolherImagemAleatoria();


function trocarImagensELimparCanvas() {

    escolherImagemAleatoria(); 


    var imageUrls = [
        "imgs/snake.png",
        "imgs/coração chorando.png",
        "imgs/tato1.png",
        "imgs/tao3.png",
        "imgs/tato2.png",
        "imgs/tato4.png",
        "imgs/tato5.png",
        "imgs/tato6.png",
        "imgs/tio_patinhas.jpg",
        "imgs/boca_coringa.jpg",
        "imgs/nome1.jpg",
        "imgs/nome2.jpg",
        "imgs/carl.png",
        "imgs/fé.png",
        "imgs/pimentinha.avif",
        "imgs/blackout.jpg",
    ];
    var randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    var randomImage = document.getElementById("randomImage");
    randomImage.src = randomImageUrl;


    const paintCanvas = document.getElementById('paintCanvas');
    const context = paintCanvas.getContext('2d');
    context.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
}


document.addEventListener('DOMContentLoaded', function () {
    const paintCanvas = document.getElementById('paintCanvas');
    const context = paintCanvas.getContext('2d');
    let isDrawing = false;
    let brushSize = 5; 

    paintCanvas.addEventListener('mousedown', startDrawing);
    paintCanvas.addEventListener('mousemove', draw);
    paintCanvas.addEventListener('mouseup', stopDrawing);
    paintCanvas.addEventListener('mouseout', stopDrawing);
    paintCanvas.addEventListener('mousein', ()=>{
        if(isDrawing){
            
        }
    });

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function draw(e) {
        if (!isDrawing) return;

        context.lineWidth = brushSize;
        context.lineCap = 'round';
        context.strokeStyle = '#000000';

        context.lineTo(e.clientX - paintCanvas.offsetLeft, e.clientY - paintCanvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - paintCanvas.offsetLeft, e.clientY - paintCanvas.offsetTop);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }

    window.changeBrushSize = function(size) {
        brushSize = size;
    };
});



function mudarTexto(){

    var botaoElement = document.getElementById("botao-alaranjado");

    document.getElementById("Exp").innerHTML = 'A informação crucial a se ter em mente é que, durante o processo de tatuagem, não há borracha nem opção "ctrl Z" – afinal, estamos lidando com arte permanente. Assim que você conclui o tutorial, seu primeiro cliente já estará aguardando. No canto superior esquerdo, você encontrará o design desejado pelo cliente, enquanto do lado direito, há algumas opções para ajustar o tamanho do traço. Dominar essa habilidade é essencial para criar tatuagens impecáveis! APERTE NO BOTÃO PARA AVANÇAR PARA O SEU ESTÚDIO';
    botaoElement.innerHTML = '<a href="jogo.html" style="text-decoration: none; color: white;" target="_blank">Próximo</a>';
}

