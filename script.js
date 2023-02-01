let userScore  = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");


function getComputerChoice(){
    const choices =['r', 's', 'p'];
    const randomNumber =Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToword(letter){
    if (letter ==="r")return "Rock";
    if (letter ==="s")return "scissors";
    return "paper";
}


function win(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "user".fontsize(3).sub();
    const smallCompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToword(userChoice)}${smallUserword} beats ${convertToword(computerChoice)}${smallCompword}. You win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow') , 1000);
    /*※上のコードの自分向けの補足。
     setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 1000);がもと。
    */
}

setTimeout(function(){})

function lose(userChoice, computerChoice) {
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "user".fontsize(3).sub();
    const smallCompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToword(userChoice)}${smallUserword} loses to ${convertToword(computerChoice)}${smallCompword}. You lost...`
    userChoice_div.classList.add('red-glow');
    setTimeout(() =>  userChoice_div.classList.remove('red-glow') , 1000);

}

function draw(userChoice, computerChoice) {
    const smallUserword = "user".fontsize(3).sub();
    const smallCompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToword(userChoice)}${smallUserword} equals ${convertToword(computerChoice)}${smallCompword}. It's a draw.`
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow') , 1000);
    

}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":      
            draw(userChoice, computerChoice);
            break;
            
    }
}

function main(){
    rock_div.addEventListener('click', () =>game("r"));
    scissors_div.addEventListener('click', () =>game("s"));
    paper_div.addEventListener('click', () =>game("p"));
}

main();
