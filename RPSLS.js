"use strict";
/// use an array for rpsls ["rock", "paper"]
/// use an if/else if/else statements for results

let playerOne = prompt("What is player one's name?");
let playerTwo = prompt("What is player two's name?");

class Game {
    constructor() {
      this.playerOne = new Player(" ");
      this.playerTwo = new Player(" ");
      this.playerThree = new Player ("AI");

      this.rock;
      this.paper;
      this.scissors;
      this.lizard;
      this.smock;

      this.rpsls = [];


}

runGame() {
    this.displayMessage();

    while(this.playerOne.score < 3 && this.playerTwo.score < 3) {



}

    this.displayGameWinner

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


class Player {
    constructor(name) {
      this.score = 0;
      this.name = name;
    }



generateRandomNumber() {
    let randomNumber = Math.floor(Math.random());
    return randomNumbe
}




let game = new Game();
game.runGame();