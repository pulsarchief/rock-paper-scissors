function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    let choice_array = ["STONE", "PAPER", "SCISSORS"];
    return choice_array[choice];
}

function playRound(user_Selection,computer_Selection)
{   
    switch (user_Selection.toUpperCase())
    {
        case "STONE":
            switch (computer_Selection.toUpperCase())
            {   
                case "STONE":
                    return 1;
                case "PAPER":
                    return 2;
                case "SCISSORS":
                    return 3;
            }
        case "PAPER":
            switch (computer_Selection.toUpperCase())
            {   
                case "STONE":
                    return 3;
                case "PAPER":
                    return 1;
                case "SCISSORS":
                    return 2;
            }
        case "SCISSORS":
            switch (computer_Selection.toUpperCase())
            {   
                case "STONE":
                    return 2;
                case "PAPER":
                    return 3;
                case "SCISSORS":
                    return 1;
            }
        default:
            alert("User please give proper input:")
    }
}

function game()
{
    let computer_Selection = getComputerChoice();
    let user_Selection = prompt("Please choose between STONE,PAPER and SCISSORS:").toUpperCase();
    let twl = (playRound(user_Selection, computer_Selection));
    console.log(twl);
    switch (twl)
    {
        case 1:
            alert("TIE!!!! both played "+user_Selection);
            game();
            break;
        case 2:
            alert("USER LOSES!!!! "+computer_Selection+" beats "+user_Selection);
            comp+=1;
            break;
        case 3:
            alert("USER WINS!!!! "+user_Selection+" beats "+computer_Selection);
            user += 1;
            break;
    }
}
let comp=0, user = 0;

function rounds()
{
    alert("Welcome to STONE,PAPER,SCISSORS")
    alert("User plays first:")
    while ((comp < 5) && (user < 5))
    {
        game(comp, user);
        alert("User : " + user + " Computer : " + comp);
    }
    if (comp == 5)
    {
        alert("COMPUTER WINS 5 MATCHES FIRST !!!!:");
    }
    else if (user == 5)
    {
        alert("USER WINS 5 MATCHES FIRST !!!!:");
    }
}

function play()
{
    play = true;
    while (play)
    {
        rounds();
        let input = prompt("Want to play again? Y or N only:")
        {
            if (input=='Y')
            {
                play = true;
            }
            else
            {
                play = false;
            }
        }
    }

}

play()