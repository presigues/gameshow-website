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
            theme = 2;
            switch(question){
                case 1:
                   break;
            }
            break;
            case 3: 
                title = "MATH";
                theme = 3;
                switch(question){
                    case 1:
                    break;
                }
                break;
                case 4:
                    title = "SCIENCE";
                    theme = 4;
                    switch(question){
                        case 1:
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

function correct1(ans){
    if (document.getElementById("ans1").innerHTML == ans){
        document.getElementById("ans1").style.backgroundColor = "green";
        document.getElementById("ans1").style.borderColor = "green";
        
    }
 
}
function correct2(ans){
    if (document.getElementById("ans2").innerHTML == ans){
        document.getElementById("ans2").style.backgroundColor = "green";
        document.getElementById("ans2").style.borderColor = "green";
  
    }
 
}
function correct3(ans){
    if (document.getElementById("ans3").innerHTML == ans){
        document.getElementById("ans3").style.backgroundColor = "green";
        document.getElementById("ans3").style.borderColor = "green";
       
    }
 
}
function correct4(ans){
    if (document.getElementById("ans4").innerHTML == ans){
        document.getElementById("ans4").style.backgroundColor = "green";
        document.getElementById("ans4").style.borderColor = "green";
        
    }
 
}