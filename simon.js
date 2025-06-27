let gameseq = [];
let userseq = [];

let btns = ['orange', 'blue', 'purple', 'red'];

let start = false;
let level = 0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function (){
    if (!start) {
        console.log("Game started");
        start = true;

        levelup();
    }
});


function gameflash (btn){
    btn.classList.add("flash"); // adding flash class to the button
    setTimeout(function(){ 
        btn.classList.remove("flash"); // removing flash class after 400ms
    }, 250);
}

function userflash (btn){
    btn.classList.add("userflash"); // adding flash class to the button
    setTimeout(function(){ 
        btn.classList.remove("userflash"); // removing flash class after 400ms
    }, 100);
}

function levelup(){
    userseq = []; // resetting the user sequence
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 3);
    let randcol = btns[randInd];
    let randbtn = document.querySelector(`.${randcol}`);
    gameseq.push(randcol); // adding random color to the game sequence
    console.log(gameseq);
    gameflash(randbtn);
}

function btnpress(){
    let btn = this;
    userflash(btn);
    usercol = btn.getAttribute("id"); // getting the id of the button pressed
    userseq.push(usercol); // adding the user pressed button to the user sequence
    checkans(userseq.length-1); // checking the answer
}

let allbtns = document.querySelectorAll(".btn");
for( bn of allbtns){
    bn.addEventListener("click", btnpress);
}

function checkans(idx){
    if (userseq[idx] == gameseq[idx]) {
        if(userseq.length == gameseq.length){
           setTimeout(levelup , 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was:<b>${level} </b> <br> Press any key to restart.`;
        document.body.style.backgroundColor = "red";
        setTimeout(function(){
            document.body.style.backgroundColor = "white";
        } , 150);
        reset();
    }
}

function reset(){
    gameseq = [];
    userseq = [];
    start = false;
    level = 0;
}