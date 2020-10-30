"use strict";
/// use an array for rpsls ["rock", "paper"]
/// use an if/else if/else statements for results


class Game {
    constructor() {
        let playerOne = promptFor("What is player one's name?");
        let playerTwo = promptFor("What is player two's name?");
      this.playerOne = new Player(" ");
      this.playerTwo = new Player(" ");
    }
    /// create a method about game setup it will take UI and it will take two users and an AI to 
    compareGestures(){


        let gameGestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

        if(gameGestures[0] > gameGestures[2]) {
            console.log("Rock crushes scissors.");
        }
        else if(gameGestures[1] > gameGestures[0]){
            console.log("Paper covers rock.");
        }
        else if(gameGestures[0] > gameGestures[3]){
            console.log("Rock crushes Lizard.");
        }
        else if(gameGestures[2] > gameGestures[1]){
            console.log("Scissors cuts paper.");
        }
        else if(gameGestures[2] > gameGestures[3]){
            console.log("Scissors decapitates Lizard.");
        }
        else if(gameGestures[3] > gameGestures[4]){
            console.log("Lizard poisons Spock.");
        }
        else if(gameGestures[4] > gameGestures[3]){
            console.log("Spock smashes scissors.");
        }
        else if(gameGestures[3] > gameGestures[1]){
            console.log("Lizard eats paper.");
        }
        else if(gameGestures[1] > gameGestures[4]){
            console.log("Paper disproves Spock.");
        }
        else if(gameGestures[4] > gameGestures[0]){
            console.log("Spock vaporizes rock.");
        }
        else if(gameGestures[0] === gameGestures[0]){
            console.log("Two rocks can't smash eachother. It's a tie.");
        }
        else if(gameGestures[1] === gameGestures[1]){
            console.log("Two papers can't cover eachother. It's a tie.");
        }
        else if(gameGestures[2] === gameGestures[2]){
            console.log("Two scissors can't cut eachother. It's a tie.")
        }
        else if(gameGestures[3] === gameGestures[3]){
            console.log("You both have chosen Lizard. It's a tie.");
        }
        else if(gameGestures[4] === gameGestures[4]){
            console.log("You both have chosen Smock. It's a tie.");
        }

    }


runGame() {
    this.displayMessage();

    while(this.playerOne.score < 3 && this.playerTwo.score < 3) {


}
}

    // this.displayGameWinner

displayMessage(){
    console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock.");
    console.log("You will have the choice to play with an AI or a second player. Please make a choice.");
    console.log("Alright. To win the game, Player one or Player two will need 3 points to win.");
    console.log("The way this works is, rock crushes scissors, scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, and Spock vaporizes rock.");
    console.log("If you understand how this works, let the game begin!";
}

displayGameWinner() {
    if(this.playerOne.score > this.playerTwo.score){
        console.log(this.playerOne.name + " wins this game!");
    }

    else if(this.playerTwo.score > this.playerOne.score){
        console.log(this.playerTwo.name + " wins this game!");
    }
        else{
            console.log(this.playerThree + "AI wins!");
        }
}
}

class Player {
    constructor(name) {
      this.score = 0;
      this.name = name;
    }



    generateRandomNumber() {
    let randomNumber = Math.floor(Math.random());
    return randomNumbe
}


}

let game = new Game();
game.runGame();