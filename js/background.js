const body = document.querySelector("body");
const img_number = 3;

function paintImage(imgNumber) {
    const image = new Image();
    body.style.backgroundImage = `url(img/${imgNumber}.jpg)`;
}

function genRandom() {
    const number = Math.floor(Math.random() * img_number);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();