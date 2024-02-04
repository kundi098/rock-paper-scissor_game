var possibility =["stone","paper","scissor"];

var length= possibility.length;
//////////////////////////////////////////////////////

var random = Math.floor(Math.random()*length);

var turn = possibility[random];

var select = "pics/turn_" + turn + ".jpg" ;

var choose = document.querySelectorAll("img")[0].setAttribute("src",select);

// for image 2
var random_2 = Math.floor(Math.random()*length);

var turn_2 = possibility[random_2];
var select_2 = "pics/turn_"+ turn_2  + ".jpg";


var choose_2 = document.querySelectorAll("img")[1].setAttribute("src",select_2);

//announcing result


if (turn === "stone"){
    if(turn_2 === "paper"){
        document.querySelector("h1").innerHTML="player 2 wons!!";
    }
    else if(turn_2 ==="scissor"){
        document.querySelector("h1").innerHTML="player 1 wons!!";
    }
    else{
        document.querySelector("h1").innerHTML="draw!!";
    }
}
else if(turn ==="paper"){
    if(turn_2 === "stone"){
        document.querySelector("h1").innerHTML="player 1 wons!!";
    }
    else if(turn_2 === "scissor"){
        document.querySelector("h1").innerHTML="player 2 wons!!!";
    }
    else{
        document.querySelector("h1").innerHTML="its draw!!!";
    }
}
else if (turn === "scissor"){
    if(turn_2 === "stone"){
        document.querySelector("h1").innerHTML="player 2 wons!!!";
    }
    else if(turn_2 ==="paper"){
        document.querySelector("h1").innerHTML="player 1 wons!!!";
    }
    else{
        document.querySelector("h1").innerHTML="draw!!!";
    }
}
