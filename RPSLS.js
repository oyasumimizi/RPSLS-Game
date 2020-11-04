"use strict";
/// use an array for rpsls ["rock", "paper",etc] - x 
/// use an if/else if/else statements for results - x
/// add a way for playerone and playertwo to use the gamegestures to play RPSLS
/// add an AI and second player input x
///
/// i already added an else statement for [bad user input] x
/// edit at the end to see if inheiritance [parent and child] is used correctly x
/// a best of three game - x
/// make sure the correct player will get the right points at the end of each round[i think it's done]

class Game {
    constructor() {
        this.playerOne = new Player(" ");
        this.playerTwo = new Player(" ");

        this.gameGestures = [];

    }


    playerInfo() {
        
        let playerInfoInputOne = prompt("What is player one's name?");
        this.playerOne = new Human(playerInfoInputOne);
        let playerInfoInputTwo = prompt("Would you like to play with another person or an AI?");
        if (playerInfoInputTwo.tolowercase() === "human") {
            let playerInfoInputTwo = promptFor("What is the other player's name?");
            this.playerTwo = new Human(playerInfoInputTwo);
        }
        else {
            this.playerTwo = new AI();
            console.log("You have chosen to play against an AI.");
        }
    }
    compareGestures() {


        let gameGestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

        if (gameGestures[0] > gameGestures[2]) {
            console.log("Rock crushes scissors.");
        }
        else if (gameGestures[1] > gameGestures[0]) {
            console.log("Paper covers rock.");
        }
        else if (gameGestures[0] > gameGestures[3]) {
            console.log("Rock crushes Lizard.");
        }
        else if (gameGestures[2] > gameGestures[1]) {
            console.log("Scissors cuts paper.");
        }
        else if (gameGestures[2] > gameGestures[3]) {
            console.log("Scissors decapitates Lizard.");
        }
        else if (gameGestures[3] > gameGestures[4]) {
            console.log("Lizard poisons Spock.");
        }
        else if (gameGestures[4] > gameGestures[3]) {
            console.log("Spock smashes scissors.");
        }
        else if (gameGestures[3] > gameGestures[1]) {
            console.log("Lizard eats paper.");
        }
        else if (gameGestures[1] > gameGestures[4]) {
            console.log("Paper disproves Spock.");
        }
        else if (gameGestures[4] > gameGestures[0]) {
            console.log("Spock vaporizes rock.");
        }
        else if (gameGestures[0] === gameGestures[0]) {
            console.log("Two rocks can't smash eachother. It's a tie.");
        }
        else if (gameGestures[1] === gameGestures[1]) {
            console.log("Two papers can't cover eachother. It's a tie.");
        }
        else if (gameGestures[2] === gameGestures[2]) {
            console.log("Two scissors can't cut eachother. It's a tie.")
        }
        else if (gameGestures[3] === gameGestures[3]) {
            console.log("You both have chosen Lizard. It's a tie.");
        }
        else if (gameGestures[4] === gameGestures[4]) {
            console.log("You both have chosen Smock. It's a tie.");
        }
        else {
            console.log("That is not a choice. Please pick again.");
        }
    }



    runGame() {
        this.playerInfo();
        this.displayMessage();
        //Call a function that asks how many players and then creates appropriate human/AI for playerOne, playerTwo

        while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
            let playerOneTotal = this.playerOne;
            let playerTwoTotal = this.playerTwo;

            if (playerOneTotal > playerTwoTotal) {
                console.log(this.playerOne.name + " wins this round!");
                this.playerOne.score++;
            }
            else if (playerTwoTotal > playerOneTotal) {
                console.log(this.playerTwo.name + " wins this round!");
                this.playerTwo.score++;
            }
            else {
                console.log("It's a tie game! Want to play again?");
            }
        }

        this.displayGameWinner();
    }
  
}



displayMessage(){
    console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock.");
    console.log("You will have the choice to play with an AI or a second player. Please make a choice.");
    console.log("Alright. To win the game, Player one or Player two will need 3 points to win.");
    console.log("The way this works is, rock crushes scissors, scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, and Spock vaporizes rock.");
    console.log("If you understand how this works, let the game begin!");
}

displayGameWinner() {
    if (this.playerOne.score > this.playerTwo.score) {
        console.log(this.playerOne.name + " wins this game!");
    }

    else if (this.playerTwo.score > this.playerOne.score){
        console.log(this.playerTwo.name + " wins this game!");
    }
}

class Player {
    constructor(name) {
        this.gameGestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.score = 0;
        this.name = name;
        this.chosenGesture;
    }
    chooseGesture() {
        console.log("Player " + this.name + "has chose the gesture of " + this.chosenGesture + "and has now achieved the score of " + this.score + ".");
    }
}

class Human extends Player {
    constructor(name) {
        super(name);
        this.score = 0;
        
    }

    chooseGesture() {   
        // ask user what gesture to use [prompt and switch case // press 1 for rock + subtract one]
        this.gameGestures[0]; // rock
        let humanPlayerGesture = prompt("What gesture will you choose? Type 1 for Rock, 2 for Paper, 3 for Scissors, 4 for Lizard and 5 for Spock.");
        switch(this.gameGestures){
            case 1:
                chosenGesture = "Rock" //  --1 ? ;
                break;
            case 2:
                chosenGesture = "Paper";
                break;
            case 3:
                chosenGesture = "Scissors";
                break;
            case 4:
                chosenGesture = "Lizard";
                break;
            case 5: 
                chosenGesture = "Spock";
                break;

        }
        console.log("Player " + this.super + "has chose the gesture of " + this.chosenGesture + "and has now achieved the score of " + this.score + ".");
    }
 }
}
class AI extends Player {
    constructor(name) {
        super(name);
        this.score = 0;
    }
    
    chooseGesture() {
        // get a random number
        this.chosenGesture = this.gameGestures[randomNumber];


        console.log("Player " + this.super + "has chose the gesture of " + this.chosenGesture + "and has now achieved the score of " + this.score + ".");
    }
    generateRandomNumber(maximum) {
        let randomNumber = Math.floor(Math.random() * maximum);
        return randomNumber;
        }
        
}




chooseGesture(){
    console.log("Override this method!");
}

//Add Human and AI classes, slide 24 of JavascriptOOP lecture
//They will each override chooseGesture method

let game = new Game();
game.runGame();

