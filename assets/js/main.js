const title = document.getElementById('autotext');
const text = 'bonjour, je m\'appelle julien';
let index = 0;

function play () {
    title.innerHTML = text.slice(0, index);

    index++;
    //le if permet de rejour l'animation a l'infini.
    if (index > text.length) {
        index = 0;
    }
}

// setInterval permet d'appeller une fonction tout les x interval
// ici tout les 300 ms, la fonction ply est relancé
let timer = setInterval(play, 300);