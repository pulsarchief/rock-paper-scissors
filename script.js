const user_choice = document.querySelector("#choice_c");
const comp_choice = document.querySelector("#choice_u");

const user_score = document.querySelector("#user_score");
const comp_score = document.querySelector("#comp_score");
const info = document.querySelector("#info");

const paper = document.querySelector("#paper");
const stone = document.querySelector("#stone");
const scissors = document.querySelector("#scissors");

stone.addEventListener("click", play(1));
paper.addEventListener("click", play(2));
scissors.addEventListener("click", play(3));

function play(user) {
    let choices = ['stone', 'paper', 'scissors'];
    let user_choice = user;
    let comp_choice = Math.floor(Math.random() * 3) + 1;

    switch (user_choice) {
        case 1:
            switch (comp_choice) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    break;
            }
        case 2:
            switch (comp_choice) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    break;
            }
        case 3:
            switch (comp_choice) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    break;
            }
        default:
            break;
    }
}