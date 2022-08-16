const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "green", "red", "pink", "#d303fc", "#f301fc", "#bd7373", "#cacc52"];

button.addEventListener("click", changeBackground);
let sıra = 0;

function changeBackground() {
    // rastgele bir renk
 
    const rastgeleSayı = Math.floor(Math.random() * colors.length);
    const secılenkRenk = colors[rastgeleSayı];
    console.log(rastgeleSayı, secılenkRenk);
    body.style.backgroundColor = secılenkRenk;

    // sırayla arka plan rengi seç
    
    

    //if (sıra == 9) sıra = 0
    //const secılenkRenk = colors[sıra];
   // sıra++;
    //body.style.backgroundColor = secılenkRenk;

}