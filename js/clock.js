const clock = document.querySelector("#clock");

function getclock() {
    const date = new Date();
    const dateHour = String(date.getHours()).padStart(2,"0");
    const dateMin = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${dateHour}:${dateMin}`;
}

getclock();
setInterval(getclock,1000);