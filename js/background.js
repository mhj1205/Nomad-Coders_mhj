const body = document.querySelector("body");
const img_number = 3;

function paintImage(imgNumber) {
    body.style.backgroundImage = `url(img/${imgNumber}.jpeg)`;
}

function genRandom() {
    const number = Math.floor(Math.random() * img_number);
    return number;
}

function addOverlay() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // 반투명 검정색 오버레이
    overlay.style.zIndex = "-1"; // 오버레이가 다른 콘텐츠 뒤에 위치하도록 설정
    body.appendChild(overlay);
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
    addOverlay();
}
init();