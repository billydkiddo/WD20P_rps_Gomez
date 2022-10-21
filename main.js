let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById ("user_score");
const computerScore_span = document.getElementById ("computer_score");
const scoreboard_div = document.querySelector (".score_boeard");
const result_p = document.querySelector (".result > p");
const rock_div = document.getElementById ("r");
const paper_div = document.getElementById ("p");
const scissors_div = document.getElementById ("s");

//computer choices
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "PAQUIAO";
    if (letter === "p") return "MARQUEZ";
    return "MAYWEATHER";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "player".fontsize(2).sup();
    const smallCompWord = "compu".fontsize(2).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. "You Win!"`;
    //result_p.innerHTML = convertToWord (userChoice) + " " + "beats" + " " +  convertToWord(computerChoice) + ". You Win!";
    userChoice_div.classList.add('green_glow');//effects
    setTimeout(() => userChoice_div.classList.remove('green_glow'), 300);
   // setTimeout(function() {userChoice_div.classList.remove('green_glow')}, 300);
}

setTimeout(function() {}, 1000);

function lose(userChoice, computerChoice) {
    const smallUserWord = "player".fontsize(2).sup();
    const smallCompWord = "compu".fontsize(2).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}."You Lost!"`;
    //result_p.innerHTML = convertToWord (userChoice) + " " + "loses to" + " " +  convertToWord(computerChoice) + ". You Lost!";
    userChoice_div.classList.add('red_glow');//effects
    setTimeout(() => userChoice_div.classList.remove('red_glow'), 300);
   // setTimeout(function() {userChoice_div.classList.remove('red_glow')}, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "player".fontsize(2).sup();
    const smallCompWord = "compu".fontsize(2).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} ties ${convertToWord(computerChoice)}${smallCompWord}."It's a Draw!"`;
    //result_p.innerHTML = convertToWord (userChoice) + " " + "ties" + " " +  convertToWord(computerChoice) + ". You Win!";
    userChoice_div.classList.add('gray_glow');//effects
    setTimeout(() => userChoice_div.classList.remove('gray_glow'), 300);
    //setTimeout(function() {userChoice_div.classList.remove('gray_glow')}, 300);
}


//choices
function game(userChoice) {
    const computerChoice = getComputerChoice();
   // console.log ("userChoice => " + userChoice);
  //  console.log ("computerChoice => " + computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
   // console.log ("Player Wins");
    break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
   // console.log ("Player loses");
    break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
   // console.log ("Its a draw");
  }
}

function main (){

rock_div.addEventListener ('click', function(){
game ("r");
    //console.log("You chose Paquiao");
})

paper_div.addEventListener ('click', function(){
    game("p");
    //console.log("You chose Marquez");
})
scissors_div.addEventListener ('click', function(){
   game ("s");
    // console.log("You chose Mayweather");
})
}

main();

/*const clearScore = function(){
    document.getElementById("user_score").innerHTML = "0";
    document.getElementById("computer_score").innerHTML = "0";
};*/