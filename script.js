let gameseq=[];
let userseq=[];
let level = 0;
let started = false;

let btns = ["yellow" ,"red","purple","green"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(started == false){
        started=true;
        console.log("Game started!")
        levelup();
    }
});

function levelup() {
    level++;
   h2.innerText = `Level ${level}`;
   let rendnum = Math.floor(Math.random()*4);
   let rendcolor = btns[rendnum];
   let rendbtn = document.querySelector(`.${rendcolor}`);
   gameseq.push(rendcolor);
   console.log(gameseq);
   gameflash(rendbtn);
}

function gameflash(btn) {
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userclick");
    setTimeout(() => {
        btn.classList.remove("userclick");
    }, 250);
}

function reset() {
     gameseq=[];
     userseq=[];
     level = 0;
     started = false;
}
function check(ind) {
    if(gameseq[ind] === userseq[ind]){
        if(gameseq.length==userseq.length){
            setTimeout(() => {
                levelup();
                userseq=[];
            }, 500); 
        }
    }
    else{
        h2.innerHTML = `Game over! Your score is ${level} <br>Press any key to start the game`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 500);
        reset();
    }
}
function btnpress() {
    let id = this.id;
    userflash(this);
    userseq.push(id);
    console.log(userseq);
    check(userseq.length-1);

}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}