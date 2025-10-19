let boxes = document.querySelectorAll(".box"); 
let resetb = document.querySelector("#reset");
let newb = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-cont");
let message = document.querySelector("#msg");

let turn0 = true;

//defining all the winning idexes
let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Reset button function
const resetgame = () =>{
        turn0 = true;
        enbox();
        msgcontainer.classList.add("hide");
} 

//To display X and O on clicking box
boxes.forEach((box) => {
    box.addEventListener("click", (evt) => {
        if (turn0){
            box.innerText = "X";
            turn0 = false;
        }
        else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

//to disable boxes after winner is declared
const disbox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

//to enable boxes after reset/new game
const enbox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

//to display winner
const showwinner = (winner) =>{
    message.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disbox();
}

//to check if X or O is winner
const checkwinner = () => {
    for (let pattern of winpatterns){
        let val = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val != "" && val2 != "" && val3 != ""){
            if (val === val2 && val2 === val3){
                console.log("Winner is", val);
                showwinner(val);
            }
        }
    }
}

//to call functions on clicking new game and reset game
newb.addEventListener("click", (resetgame));
resetb.addEventListener("click", (resetgame));

/*
let counter = 0;
boxes.forEach((box) => {
    box.addEventListener("click", (evt) => {
        console.log("box was clicked.");
        counter++;
        if (counter % 2 != 0)
            box.innerText = "X";
        else
            box.innerText = "O";
    })
})*/
