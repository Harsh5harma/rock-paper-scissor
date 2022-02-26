function computerPlay()
{
    let num = Math.floor(Math.random()*10)%3;
    if (num===0){
        return "Rock";
    }
    else if (num===1)
    {
        return "Paper";
    }
    else if (num===2){
        return "Scissor";
    }
}


function numValue(choice)
{
    switch (choice)
    {
        case "rock": return 0; break;
        case "paper": return 1; break;
        case "scissor": return 2; break;
    }
}

function playRPS(compChoice,playerChoice)
{
    let cc = compChoice.toLowerCase();
    let cp = playerChoice.toLowerCase();
    let ccn = numValue(cc);
    let cpn = numValue(cp);
    if (ccn>cpn){
        alert("Computer Won");
    }
    else if (ccn<cpn){
        alert("Player Won");
    }
    else{
        alert("This round was a tie.");
    }
}
let counter = 1;
function game(){
for (let i = 0;i<5;++i){
    alert(`This is the ${counter} round. All the best!`);
    let playerChoice = prompt("Enter your choice: ",'');
    let compChoice = computerPlay();
    alert(`Computer chose ${compChoice}`);
    playRPS(compChoice,playerChoice);
    ++counter;
}
}

game();
