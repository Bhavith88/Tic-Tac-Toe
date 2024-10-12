let boxes = document.querySelectorAll(".box");
let rBtn = document.querySelector('#rbtn');
let ngBtn = document.querySelector('#ngbtn');
let msgContainer = document.querySelector('.msg-container');
let Msg = document.querySelector('#msg');

let turn0 = true;


const winComb = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const checkWinner = () => {
    for(let pattern of winComb){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
};

const showWinner = (winner) => {
    Msg.innerText = `Congratulations, winner is : ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
};

boxes.forEach(
    (box)=>{
        box.addEventListener("click", () => {
            if(turn0){
                box.style.color='#003E1F'
                box.innerText = "0";
                turn0 = false;
            } else  {
                box.style.color='#C33149'
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true;
            checkWinner();
        })
    }
)

ngBtn.addEventListener('click',resetGame);
rBtn.addEventListener('click',resetGame);

