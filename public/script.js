let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"),
    computerScore_span = document.getElementById("computer-score"),
    result_div = document.querySelector(".result"),
    rock_div = document.getElementById("r"),
    paper_div = document.getElementById("p"),
    scissors_div = document.getElementById("s"),
    userResult = document.querySelector(".user_result img"),
    computerResult = document.querySelector(".computer_result img");

//cange shuffle image

function getComputerChoich() {
    const choich = ["r", "p", "s"];
    const computerImage = [
        "img/resultRock2.png",
        "img/resultPaper2.png",
        "img/resultScissors2.png",
    ];
    const randomNumber = Math.floor(Math.random() * 3);
    computerResult.src = computerImage[randomNumber];
    return choich[randomNumber];
}
function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "WIN";
}
function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "LOSE";
}
function draw() {
    result_div.innerHTML = "DRAW";
}
function game(userChoice) {
    const computerChoich = getComputerChoich();
    switch (computerChoich + userChoice) {
        case "rp":
        case "sr":
        case "ps":
            win();
            break;
        case "rs":
        case "pr":
        case "sp":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}
rock_div.addEventListener("click", function () {
    game("r");
    userResult.src = "img/resultRock1.png";
    // clearTimeout(timeoutID);
    // clearInterval(intervalId);
    restart();
});
paper_div.addEventListener("click", function () {
    game("p");
    userResult.src = "img/resultPaper1.png";
    // clearTimeout(timeoutID);
    // clearInterval(intervalId);
    restart();
});
scissors_div.addEventListener("click", function () {
    game("s");

    userResult.src = "img/resultScissors1.png";
    // clearTimeout(timeoutID);
    // clearInterval(intervalId);
    restart();
});
let imagesUser = [
    "img/shufflePaper1.png",
    "img/shuffleRock1.png",
    "img/shuffleScissors1.png",
];
let imagesComputer = [
    "img/shufflePaper2.png",
    "img/shuffleRock2.png",
    "img/shuffleScissors2.png",
];

let intervalId;
let timeoutID;
function restart() {
    clearTimeout(timeoutID);
    clearInterval(intervalId);

    timeoutID = setTimeout(() => {
        intervalId = setInterval(() => {
            let random = Math.floor(Math.random() * 3);
            computerResult.src = imagesComputer[random];
            userResult.src = imagesUser[random];
        }, 200);
    }, 1500);
}
