const user_choice = document.querySelector("#choice_u"); // user choice image 
const comp_choice = document.querySelector("#choice_c"); // computer choice image 

const user_score = document.querySelector("#user_score"); // user score 
const comp_score = document.querySelector("#comp_score"); // comp score 
const info = document.querySelector("#info"); // tie , who won etc

const stone = document.querySelector("#stone"); //stone button
const paper = document.querySelector("#paper"); // paper button
const scissors = document.querySelector("#scissors"); // scissors button 

const rounds = document.querySelector("#rounds");


stone.addEventListener("click", () => play(0)); // clicking stone button
paper.addEventListener("click", () => play(1)); // clicking paper button
scissors.addEventListener("click", () => play(2)); // clicking scissors button


function play(user) {
    let choices = ["stone", "paper", "scissors"];
    let choices_img = ["icons/stone.png", "icons/paper.png", "icons/scissors.png"];
    let u = user;
    let c = Math.floor(Math.random() * 3);
    user_choice.setAttribute("src", choices_img[u]);
    comp_choice.setAttribute("src", choices_img[c]);
    if (user_score.textContent >= 5) {
        info.textContent = "USER WINS 5!!!!"
        return;
    }
    if (comp_score.textContent >= 5) {
        info.textContent = "COMPUTER WINS 5!!!!"
        return;
    }
    incrementRounds();
    logic(u, c);
}

function logic(user, computer) {
    if (user == computer) {
        info.textContent = "TIE";
        return;
    }
    if ((user == 0 && computer == 2) || (user == 1 && computer == 0) || (user == 2 && computer == 1)) {
        info.textContent = "USER WINS";
        user_score.textContent++;
    }
    if ((user == 0 && computer == 1) || (user == 1 && computer == 2) || (user == 2 && computer == 0)) {
        info.textContent = "COMPUTER WINS";
        comp_score.textContent++;
    }
}

function incrementRounds() {
    let arr = rounds.textContent;
    arr = arr.split(" ");
    arr[1]++;
    rounds.textContent = arr[0] + " " + arr[1];
}
