const body = document.querySelector("body");
const button = document.querySelector("button");
const color = ["black","yellow","green","red","blue","pink","purple"];

button.addEventListener("click",changeBackground);

let sira=0;

function changeBackground(){
    // Random renk seçici
    //const randomNum = Math.floor(Math.random() * color.length);
    //const picker = color[randomNum];
    //body.style.backgroundColor = picker;

    // Sıralı renk seçici
    if(sira ==7){
        sira = 0;
    }
    const picker = color[sira];
    sira++;
    body.style.backgroundColor = picker;
}

