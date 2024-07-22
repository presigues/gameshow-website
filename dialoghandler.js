function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var audio = new Audio('medium-text-blip-14855.mp3'); // audio message sound effect

// add win audio

// add lose audio

// add other stuff

async function alldialogcuzimcrazy(){
    audio.play();
    await delay(4000);
    audio.pause();
    await delay(2000);
    document.getElementById("dia1").style.display = "none";
    document.getElementById("dia2").style.display = "block";
    audio.play();
    await delay (4000);
    audio.pause();
    await delay(2000);
    document.getElementById("dia2").style.display = "none";
    document.getElementById("dia3").style.display = "block";
    audio.play();
    await delay (1500);
    audio.pause();
    await delay(600);
    document.getElementById("dia3").style.display = "none";
    document.getElementById("dia4").style.display = "block";
    audio.play();
    await delay (4000);
    audio.pause();
    await delay(1000);
    document.getElementById("alldialog").style.display = "none";
    document.getElementById("choiceframe").style.display = "block";

}



alldialogcuzimcrazy();