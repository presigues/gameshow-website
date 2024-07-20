function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



function pick1(){
choice = 1;
}

function pick2(){
choice = 2;
}

function pick3(){
choice = 3;   
}

function pick4(){
choice = 4;
}


function topicgen(choice){
switch(choice){
    case 1:
        title = "TECH";
        theme = 1;
        break;
        case 2:
            title = "ART";
            theme = 2;
            break;
            case 3: 
                title = "MATH";
                theme = 3;
                break;
                case 4:
                    title = "SCIENCE";
                    theme = 4;
                    break;
}

console.log("THEME CHOSEN : " + title);
}