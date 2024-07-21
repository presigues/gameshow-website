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
        question = getRandomInt(1, 12);
        switch(question){
            case 1:
                ques = "Which computer language is the most widely used?";
                ans = "JavaScript";
                otherans1 = getRandomInt(1, 24); // get wrong 1 
                while(otherans1 == ques){
                otherans1 = getRandomInt(1, 24);
                }
                otherans2 = getRandomInt(1, 24); // get wrong 2
                while(otherans1 == otherans2 || otherans2 == ques){
                    otherans2 = getRandomInt(1, 24);
                }
                otherans3 = getRandomInt(1, 24);
                while(otherans1 == otherans3 || otherans2 == otherans3 || otherans3 == ques){
                    otherans2 = getRandomInt(1, 24);
                }
        }
        break;
        case 2:
            title = "ART";
            theme = 2;
            switch(question){
                case 1:
                    ques = "";
                    ans = "";
                    otherans1 = getRandomInt(1, 24); // get wrong 1 
                    while(otherans1 == ques){
                    otherans1 = getRandomInt(1, 24);
                    }
                    otherans2 = getRandomInt(1, 24); // get wrong 2
                    while(otherans1 == otherans2 || otherans2 == ques){
                        otherans2 = getRandomInt(1, 24);
                    }
                    otherans3 = getRandomInt(1, 24);
                    while(otherans1 == otherans3 || otherans2 == otherans3 || otherans3 == ques){
                        otherans2 = getRandomInt(1, 24);
                    }
            }
            break;
            case 3: 
                title = "MATH";
                theme = 3;
                switch(question){
                    case 1:
                        ques = "";
                        ans = "";
                        otherans1 = getRandomInt(1, 24); // get wrong 1 
                        while(otherans1 == ques){
                        otherans1 = getRandomInt(1, 24);
                        }
                        otherans2 = getRandomInt(1, 24); // get wrong 2
                        while(otherans1 == otherans2 || otherans2 == ques){
                            otherans2 = getRandomInt(1, 24);
                        }
                        otherans3 = getRandomInt(1, 24);
                        while(otherans1 == otherans3 || otherans2 == otherans3 || otherans3 == ques){
                            otherans2 = getRandomInt(1, 24);
                        }
                }
                break;
                case 4:
                    title = "SCIENCE";
                    theme = 4;
                    switch(question){
                        case 1:
                            ques = "";
                            ans = "";
                            otherans1 = getRandomInt(1, 24); // get wrong 1 
                            while(otherans1 == ques){
                            otherans1 = getRandomInt(1, 24);
                            }
                            otherans2 = getRandomInt(1, 24); // get wrong 2
                            while(otherans1 == otherans2 || otherans2 == ques){
                                otherans2 = getRandomInt(1, 24);
                            }
                            otherans3 = getRandomInt(1, 24);
                            while(otherans1 == otherans3 || otherans2 == otherans3 || otherans3 == ques){
                                otherans2 = getRandomInt(1, 24);
                            }
                    }
                    break;
}

console.log("THEME CHOSEN : " + title);
}



function thelonglistofstuffireallydontwanttowrite(otherans1, otherans2, otherans3){
    switch(otherans1){
        case 1:

    }
}