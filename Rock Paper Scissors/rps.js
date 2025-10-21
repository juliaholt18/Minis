let usersc = 0;
let compsc = 0;

const game = document.querySelectorAll(".rps");
const msg = document.querySelector("#msg");
const usermk = document.querySelector("#yscore");
const compmk = document.querySelector("#cscore");
let userfinal = 0;
let compfinal = 0;

const compturn = () => {
    const opt = ["rock", "paper", "scissors"];
    const randindex = Math.floor(Math.random() * 3);
    return opt[randindex];
}

const draw = () =>{
    console.log("Draw Game");
    msg.innerText = "Draw game!";
}

const showwinner = (uwin) => {
    if (uwin){
        console.log("User wins!");
        msg.innerText = "User wins!";
        userfinal++;
        usermk.innerText = userfinal;
    }
    else{
        console.log("Computer wins!");
        msg.innerText = "Computer wins!";
        compfinal++;
        compmk.innerText =compfinal;
    }
}


const play = (userchoice) =>{
    console.log("User choice : ", userchoice);
    const compchoice = compturn();
    console.log("Computer choice : ", compchoice);

    if(userchoice == compchoice)
        draw();
    else{
        let uwin = true;
        if (userchoice == "rock"){
            uwin = compchoice == "paper" ? false : true;
        }
        else if (userchoice == "paper"){
            uwin = compchoice == "scissors" ? false : true;
        }
        else if (userchoice == "scissors"){
            uwin = compchoice == "rock" ? false : true;
        }
        showwinner(uwin);
    }
}




game.forEach((rps) => {
    rps.addEventListener("click", () => {
        const userchoice = rps.getAttribute("id")
        console.log("clicked.", userchoice);
        play(userchoice);
    })
})