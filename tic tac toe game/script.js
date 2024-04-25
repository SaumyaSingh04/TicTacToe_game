let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msgcontainer");
let newgamebtn = document.querySelector("#newgame");
let winmsg = document.querySelector("#msg");

let turnO = true;
//let turnx = false;

let winningpattern = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8,],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6] 
];

const resetbtn = () => {
    turnO = true;
    enablebox();
    msgcontainer.classList.add("hide")

}

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO) {
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

let disablebox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let showwinner = (winner) =>{
    winmsg.innerText = `congratulation , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

let checkwinner = () => {
    for (let pattern of winningpattern) {
     let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;

       if(pos1 != "" && pos2 != "" && pos3 != ""){
        if (pos1 === pos2 && pos2 === pos3){
            console.log("winnner",pos1);
            showwinner(pos1);
        }
       }
    }
}
newgamebtn.addEventListener("click",resetbtn);
resetbutton.addEventListener("click",resetbtn);