function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    let choice_array = ["stone", "Paper", "Scissors"];
    return choice_array[choice];
}

function playRound(user_Selection,computer_Selection)
{   
    switch (user_Selection.toLowerCase())
    {
        case "stone":
            switch (computer_Selection.toLowerCase())
            {   
                case "stone":
                    return 1;
                case "paper":
                    return 2;
                case "scissors":
                    return 3;
            }
        case "paper":
            switch (computer_Selection.toLowerCase())
            {   
                case "stone":
                    return 3;
                case "paper":
                    return 1;
                case "scissors":
                    return 2;
            }
        case "scissors":
            switch (computer_Selection.toLowerCase())
            {   
                case "stone":
                    return 2;
                case "paper":
                    return 3;
                case "scissors":
                    return 1;
            }
        default:
            alert("User please give proper input:")
    }
}

function game()
{
    let computer_Selection = getComputerChoice();
    let user_Selection = prompt("User please input your choice:");
    let twl = (playRound(user_Selection, computer_Selection));
    console.log(twl);
    switch (twl)
    {
        case 1:
            alert("tie");
            game();
            break;
        case 2:
            alert("lose");
            comp+=1;
            break;
        case 3:
            alert("win");
            user += 1;
            break;
    }
}
let comp=0, user = 0;

function rounds() {
    alert("Welcome to stone,Paper,Scissors")
    alert("User plays first:")
    while ((comp < 5) || (user < 5))
    {
        game(comp, user);
        alert("user= " + user + " computer= " + comp);
    }
    if (comp == 5)
        alert("Computer wins 5 matches first:");
    else if (user == 5)
        alert("User wins 5 matches first:");
}

rounds()



