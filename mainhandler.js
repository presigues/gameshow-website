function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var win = new Audio('mixkit-positive-notification-951.wav');
  var lose = new Audio('mixkit-wrong-answer-fail-notification-946.wav');

plrscore = 0;
botscore = 0;



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


function removetheme(){
document.getElementById("choiceframe").style.display = "none";
document.getElementById("questionframe").style.display = "block";
}


function topicgen(choice){
switch(choice){
    case 1:
        title = "TECH";
        question = getRandomInt(1, 8);
        switch(question){
            case 1:
                console.log("Which computer language is the most widely used?");
                ques = "Which computer language is the most widely used?";
                document.getElementById("questiontitle").innerHTML = ques;
                ans = "JavaScript";
               otherans1 = "C++";
               otherans2 = "Java";
               otherans3 = "C#";
            
               break;
               case 2:
                console.log("Which tech buzzword is closely related to Artificial Intelligence (AI)?");
                ques = "Which tech buzzword is closely related to Artificial Intelligence (AI)?";
                document.getElementById("questiontitle").innerHTML = ques;
                ans = "Machine Learning";
                otherans1 = "Virtual Reality";
                otherans2 = "Cryptocurrency";
                otherans3 = "Augmented Reality";
                break;
                case 3:
                    console.log("What kind of malware is designed to take advantage of a security hole before it is known?");
                    ques = "What kind of malware is designed to take advantage of a security hole before it is known?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Zero-day exploit";
                    otherans1 = "Virus";
                    otherans2 = "Randomware";
                    otherans3 = "Augmented Reality";
                    break;
                    case 4:
                        console.log("Which of these is an example of an integrated circuit?");
                    ques = "Who founded Apple Computer?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Steve Jobs";
                    otherans1 = "Bill Gates";
                    otherans2 = "Sundar Pichai";
                    otherans3 = "Sheryl Sandberg";
                    break;
                    case 5:
                        console.log("Which of these is an example of an integrated circuit?");
                    ques = "Computer trojans are an example of:";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Malware";
                    otherans1 = "Spyware";
                    otherans2 = "Computer Worms";
                    otherans3 = "Network Security Devices";
                    break;
                    case 6:
                        console.log("Which of these is an example of an integrated circuit?");
                    ques = "What type of electromagnetic waves does Wi-Fi use?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Radio Waves";
                    otherans1 = "Gamma Rays";
                    otherans2 = "Infrared Waves";
                    otherans3 = "Microwaves";
                    break;
                    case 7:
                        console.log("Which of these is an example of an integrated circuit?");
                    ques = "Who coined the term artificial intelligence?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "John McCarthy";
                    otherans1 = "Herbert A. Simon";
                    otherans2 = "Donald Ervin Knuth";
                    otherans3 = "Charles Bachman";
                    break;
                    case 8:
                        console.log("Which of these is an example of an integrated circuit?");
                    ques = "In the 1990s, this company created a computer programming language called Java:";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Sun Microsystems, Inc.";
                    otherans1 = "Oracle Corporation";
                    otherans2 = "IBM";
                    otherans3 = "Microsoft Corporation";
                    break;

        }

        break;
        case 2:
            title = "ART";
            question = getRandomInt(1, 8);
            switch(question){
                case 1:
                    ques = "What type of painting depicts scenes from everyday life in a realistic manner?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Genre painting";
                    otherans1 = "Deccani painting";
                    otherans2 = "Metaphysical painting";
                    otherans3 = "Bark painting";
                   break;
                   case 2:
                    ques = "Which of these art forms is practiced primarily in East Asia?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Scroll Painting";
                    otherans1 = "Landscape Painting";
                    otherans2 = "Sfumato";
                    otherans3 = "Panel Painting";
                   break;
                   case 3:
                    ques = "Name the type of sculpture that represents a person dying or in death.";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Gisant";
                    otherans1 = "Figurehead";
                    otherans2 = "Kouros";
                    otherans3 = "Acrolith";
                   break;
                   case 4:
                    ques = "Name the church where Leonardo da Vinci''s famous fresco the Last Supper is painted.";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Santa Maria delle Grazie";
                    otherans1 = "San Nazaro in Brolo";
                    otherans2 = "Duomo di Milano";
                    otherans3 = "Basilica di Sant''Ambrogio";
                   break;
                   case 5:
                    ques = "What was the subject of the earliest known paintings?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "animals";
                    otherans1 = "sports";
                    otherans2 = "flowers";
                    otherans3 = "landscapes";
                   break;
                   case 6:
                    ques = "Name the type of painting technique done by mixing pigments with hot liquid wax.";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Encaustic painting";
                    otherans1 = "Tempera painting";
                    otherans2 = "Casein painting";
                    otherans3 = "Acrylic painting";
                   break;
                   case 7:
                    ques = "Early photographers made their images on which of these materials?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "glass";
                    otherans1 = "stone";
                    otherans2 = "plastic";
                    otherans3 = "paper";
                   break;
                   case 8:
                    ques = "Who was the teacher of Leonardo da Vinci?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Andrea del Verrocchio";
                    otherans1 = "Sandro Botticelli";
                    otherans2 = "Raphael";
                    otherans3 = "Giorgio Vasari";
                   break;
            }
            break;
            case 3: 
                title = "MATH";
                question = getRandomInt(1, 8);
                switch(question){
                    case 1:
                        ques = "Can Pi be written as a fraction?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "No";
                        otherans1 = "Yes";
                        otherans2 = "Maybe";
                        otherans3 = "You mean Pie?";
                    break;
                    case 2:
                        ques = "What does the Roman numeral “X” equal?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "Ten";
                        otherans1 = "Twenty";
                        otherans2 = "One Hundred";
                        otherans3 = "One";
                    break;
                    case 3:
                        ques = "Does a convex shape curve inward or outward?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "Outward";
                        otherans1 = "Inward";
                        otherans2 = "It Doesnt Curve";
                        otherans3 = "Idk";
                    break;
                    case 4:
                        ques = "How many seconds are in one day?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "86,400 seconds";
                        otherans1 = "101,303 seconds";
                        otherans2 = "56,220 seconds";
                        otherans3 = "20,896 seconds";
                    break;
                    case 5:
                        ques = "What is bigger, 100, or 10 squared?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "They are the same";
                        otherans1 = "10";
                        otherans2 = "100";
                        otherans3 = "No Clue";
                    break;
                    case 6:
                        ques = "When was the equal sign invented?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "1557";
                        otherans1 = "1830";
                        otherans2 = "1690";
                        otherans3 = "1258";
                    break;
                    case 7:
                        ques = "What is the mathematical name for a pound sign (#)?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "Octothorpe";
                        otherans1 = "Pound";
                        otherans2 = "Number";
                        otherans3 = "Hashtag";
                    break;
                    case 8:
                        ques = "What mathematical theory explains the randomness of nature?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "The Butterfly Effect";
                        otherans1 = "The Random Effect";
                        otherans2 = "The Theory of Relativity ";
                        otherans3 = "Atomic theory";
                    break;
                }
                break;
                case 4:
                    title = "SCIENCE";
                    question = getRandomInt(1, 8);
                    switch(question){
                        case 1:
                            ques = "The concept of gravity was discovered by which famous physicist?";
                            document.getElementById("questiontitle").innerHTML = ques;
                            ans = "Sir Issac Newton";
                            otherans1 = "Albert Einstein";
                            otherans2 = "Galileo Galilei";
                            otherans3 = "Nikola Tesla";
                       break;
                       case 2:
                            ques = "Which is the most abundant element in the universe?";
                            document.getElementById("questiontitle").innerHTML = ques;
                            ans = "Hydrogen";
                            otherans1 = "Nitrogen";
                            otherans2 = "Carbon";
                            otherans3 = "Oxygen";
                       break;
                       case 3:
                            ques = "What is the hardest natural substance on Earth?";
                            document.getElementById("questiontitle").innerHTML = ques;
                            ans = "Diamond";
                            otherans1 = "Quartz";
                            otherans2 = "Iron";
                            otherans3 = "Gold";
                       break;
                       case 4:
                            ques = "Which freezes faster, hot water or cold water?";
                            document.getElementById("questiontitle").innerHTML = ques;
                            ans = "Hot water";
                            otherans1 = "Cold water";
                            otherans2 = "They freeze at the same time";
                            otherans3 = "It depends on the container";
                       break;
                       case 5:
                        ques = "What is the only rock that floats?";
                        document.getElementById("questiontitle").innerHTML = ques;
                        ans = "Pumice";
                        otherans1 = "Basalt";
                        otherans2 = "Granite";
                        otherans3 = "Limestone";
                   break;
                   case 6:
                    ques = "How many bones do sharks have in their bodies?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "0";
                    otherans1 = "206";
                    otherans2 = "108";
                    otherans3 = "56";
               break;
               case 7:
                    ques = "From which body part does the majority of your body heat escape?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "Evenly throughout the body";
                    otherans1 = "Head";
                    otherans2 = "Hands";
                    otherans3 = "Feet";
               break;
               case 8:
                    ques = "How many senses do humans have?";
                    document.getElementById("questiontitle").innerHTML = ques;
                    ans = "9 or more";
                    otherans1 = "5";
                    otherans2 = "6";
                    otherans3 = "4";
               break;
                    }
                    break;
}

console.log("THEME CHOSEN : " + title);
}


function pos(otherans1, otherans2, otherans3, ans){
    pos1 = getRandomInt(1, 4);
    pos2 = getRandomInt(1, 4);
    while(pos2 == pos1){
    pos2 = getRandomInt(1, 4);
    }
    pos3 = getRandomInt(1, 4);
    while(pos3 == pos2 || pos3 == pos1){
     pos3 = getRandomInt(1, 4);
    }
    pos4 = getRandomInt(1, 4);
    while(pos4 == pos3 || pos4 == pos2 || pos4 == pos1){
    pos4 = getRandomInt(1, 4);
    }

    switch(pos1){
        case 1:
            document.getElementById("ans1").innerHTML = ans;
            break;
            case 2:
                document.getElementById("ans2").innerHTML = ans;
                break;
                case 3: 
                document.getElementById("ans3").innerHTML = ans;
                break;
                case 4:
                    document.getElementById("ans4").innerHTML = ans;
                    break;
                  


    }
    switch(pos2){
        case 1:
            document.getElementById("ans1").innerHTML = otherans1;
            break;
            case 2:
                document.getElementById("ans2").innerHTML = otherans1;
                break;
                case 3: 
                document.getElementById("ans3").innerHTML = otherans1;
                break;
                case 4:
                    document.getElementById("ans4").innerHTML = otherans1;
                    break;
                  
                        

    }
    switch(pos3){
        case 1:
            document.getElementById("ans1").innerHTML = otherans2;
            break;
            case 2:
                document.getElementById("ans2").innerHTML = otherans2;
                break;
                case 3: 
                document.getElementById("ans3").innerHTML = otherans2;
                break;
                case 4:
                    document.getElementById("ans4").innerHTML = otherans2;
                    break;
                
                        

    }
    switch(pos4){
        case 1:
            document.getElementById("ans1").innerHTML = otherans3;
            break;
            case 2:
                document.getElementById("ans2").innerHTML = otherans3;
                break;
                case 3: 
                document.getElementById("ans3").innerHTML = otherans3;
                break;
                case 4:
                    document.getElementById("ans4").innerHTML = otherans3;
                    break;
               
                        

    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function correct1(ans){
    if (document.getElementById("ans1").innerHTML == ans){
        document.getElementById("ans1").style.backgroundColor = "green";
        document.getElementById("ans1").style.borderColor = "green";
        plrscore = plrscore +10;
        document.getElementById("score").innerHTML = "SCORE : " + plrscore;
        win.play();
        await delay(2000);
        
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "block";
        resetall();
        winner();
        
    }
 
}
async function correct2(ans){
    if (document.getElementById("ans2").innerHTML == ans){
        document.getElementById("ans2").style.backgroundColor = "green";
        document.getElementById("ans2").style.borderColor = "green";
        plrscore = plrscore +10;
        document.getElementById("score").innerHTML = "SCORE : " + plrscore;
        win.play();
        await delay(2000);
        
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "block";
        resetall();
  winner();
    }
 
}
async function correct3(ans){
    if (document.getElementById("ans3").innerHTML == ans){
        document.getElementById("ans3").style.backgroundColor = "green";
        document.getElementById("ans3").style.borderColor = "green";
        plrscore = plrscore +10;
        document.getElementById("score").innerHTML = "SCORE : " + plrscore;
        win.play();
        await delay(2000);
       
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "block";
        resetall();
        winner();
    }
 
}
async function correct4(ans){
    if (document.getElementById("ans4").innerHTML == ans){
        document.getElementById("ans4").style.backgroundColor = "green";
        document.getElementById("ans4").style.borderColor = "green";
        plrscore = plrscore +10;
        document.getElementById("score").innerHTML = "SCORE : " + plrscore;
        win.play();
        await delay(2000);
      
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "block";
        resetall();
         winner(); 
    }
 
}

async function wrong1(ans){
    if (document.getElementById("ans1").innerHTML != ans){
        document.getElementById("ans1").style.backgroundColor = "red";
        document.getElementById("ans1").style.borderColor = "red";
        lose.play(); 
        await delay(2000);
        winner();
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "block";
        resetall();
}
}

async function wrong2(ans){
    if (document.getElementById("ans2").innerHTML != ans){
        document.getElementById("ans2").style.backgroundColor = "red";
        document.getElementById("ans2").style.borderColor = "red";
        lose.play();
        await delay(2000);
        winner();
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "block";
        resetall();
}
}

async function wrong3(ans){
    if (document.getElementById("ans3").innerHTML != ans){
        document.getElementById("ans3").style.backgroundColor = "red";
        document.getElementById("ans3").style.borderColor = "red";
        lose.play();
        await delay(2000);
        winner();
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "block";
        resetall();
}
}

async function wrong4(ans){
    if (document.getElementById("ans4").innerHTML != ans){
        document.getElementById("ans4").style.backgroundColor = "red";
        document.getElementById("ans4").style.borderColor = "red";
        lose.play();
        await delay(2000);
        winner();
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "block";
        resetall();
}
}

function disable(){
    document.getElementById("ans1").disabled = true;
    document.getElementById("ans2").disabled = true;
    document.getElementById("ans3").disabled = true;
    document.getElementById("ans4").disabled = true;
}

function resetall(){
    document.getElementById("ans1").style.backgroundColor = "rgb(224, 191, 58)";
    document.getElementById("ans1").style.borderColor = "rgb(224, 191, 58)";
    document.getElementById("ans2").style.backgroundColor = "rgb(224, 191, 58)";
    document.getElementById("ans2").style.borderColor = "rgb(224, 191, 58)";
    document.getElementById("ans3").style.backgroundColor = "rgb(224, 191, 58)";
    document.getElementById("ans3").style.borderColor = "rgb(224, 191, 58)";
    document.getElementById("ans4").style.backgroundColor = "rgb(224, 191, 58)";
    document.getElementById("ans4").style.borderColor = "rgb(224, 191, 58)";
    document.getElementById("ans1").disabled = false;
    document.getElementById("ans2").disabled = false;
    document.getElementById("ans3").disabled = false;
    document.getElementById("ans4").disabled = false;
}

function winner(){
    if(plrscore == 100){
        document.getElementById("questionframe").style.display = "none";
        document.getElementById("choiceframe").style.display = "none";
        document.getElementById("score").innerHTML = "YOU WIN!!!!!!!!";
        document.getElementById("back").style.display = "block";
    }
}