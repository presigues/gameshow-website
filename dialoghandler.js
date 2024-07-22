function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var audio = new Audio('medium-text-blip-14855.mp3');

async function alldialogcuzimcrazy(){
    audio.play();
    await delay(4000);
    audio.pause();
    await delay(2000);
    document.getElementById("dia1").style.display = "none";
    document.getElementById("dia2").style.display = "block";
    audio.play();

}

alldialogcuzimcrazy();