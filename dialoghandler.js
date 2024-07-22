function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function alldialogcuzimcrazy(){
    await delay(6000);
    document.getElementById("dia1").style.display = "none";

}

alldialogcuzimcrazy();