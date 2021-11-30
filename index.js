let playerSelection;
let computerSelection;






let cs = 0;/*computer score*/
let ps = 0;/*player score*/



function playerSelect() {
    let choice;
    let wrong;

    choice = prompt(`Type Rock, Paper, or Scissors:`).toLowerCase();
        if(choice==="rock" && "scissors" && "paper")
        {
        return choice;
        }
    else
        {
        
        alert("Please Type Rock, Paper, or Scissors ");
        wrong = "Please type again";
        return wrong;  
        }  
}



function comSelect() {
    let cs;
    cs = Math.floor(Math.random() * 3);
    if (cs == "0") {
        return "rock";
    }
    else if (cs == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}




function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        alert("playerSelection=" + playerSelection);
        alert("computerSelection=" + computerSelection);

        return "Tied";
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("playerSelection=" + playerSelection);
        alert("computerSelection=" + computerSelection);

        ps++;
        return " Win";
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("playerSelection=" + playerSelection);
        alert("computerSelection=" + computerSelection);

        cs++;
        return "Lose";
    }


    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("playerSelection=" + playerSelection);
        alert("computerSelection=" + computerSelection);

        ps++;
        return "Win";
    }


    else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("playerSelection=" + playerSelection);
        alert("computerSelection=" + computerSelection);

        cs++;
        return "Lose";
    }


    else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("playerSelection=" + playerSelection);
        alert("computerSelection=" + computerSelection);

        cs++;
        return "Lose";
    }


    else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("playerSelection=" + playerSelection);
        alert("computerSelection=" + computerSelection);

        ps++;
        return "Win";
    }


    else if(playerSelection==="please type again"){
        alert("playerSelection=" + playerSelection);
        alert("computerSelection=" + computerSelection);

        return "please type again";
    }

}

function game() {
    for (let step = 0; step < 5; step++) {
        computerSelection = comSelect();
        playerSelection = playerSelect().toLowerCase();/*force input into lower case*/ 

        
        if(playerSelection ==="please type again"){
            step--; /* rollback index when input is wrong*/ 
            
        }
        
        alert("You :" + playRound(computerSelection, playerSelection));
    }
}





function Score() {
    alert("Your Score:" + ps +
        "\r Computer Score:" + cs);
}
game();
Score();
