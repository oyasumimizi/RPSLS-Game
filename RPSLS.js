"use strict";
/// use an array for rpsls ["rock", "paper",etc] - x 
/// use an if/else if/else statements for results - x
/// add a way for playerone and playertwo to use the gamegestures to play RPSLS x
/// add an AI and second player input 
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
        if (playerInfoInputTwo.toLowerCase() === "human") {
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

        if(this.playerOne.chosenGesture === this.playerTwo.chosenGesture){
            //it's a tie
        }
       else{
        switch (this.playerOne.chosenGesture) {
            case "Rock":
                if(this.playerTwo.chosenGesture === "Scissors"){
                this.playerOne.score++
                console.log("Rock smashes scissors.");
                }
                else if(this.playerTwo.chosenGesture === "Lizard"){
                    this.playerOne.score++
                    console.log("Rock crushes Lizard.");
                }
                else{
                    this.playerTwo.score++
                    console.log("Player Two wins");
                }
                break;
            case "Paper":
                if(this.playerTwo.chosenGesture === "Rock"){
                    this.playerOne.score++;
                    console.log("Paper covers Rock.");
                }
                else if(this.playerTwo.chosenGesture === "Scissors"){
                    this.playerTwo.score++
                    console.log("Scissors cuts Paper.");
                }
                else if(this.playerTwo.chosenGesture === "Lizard"){
                    this.playerTwo.score++;
                    console.log("Lizard eats Paper.")
                }
                else{
                    this.playerTwo.score++;
                }
                break;
            case "Scissors":
                if(this.playerTwo.chosenGesture === "Paper"){
                    this.playerOne.score++;
                    console.log("Scissors cuts Paper.");
                }
                else if(this.playerTwo.chosenGesture === "Spock"){
                    this.playerTwo.score++;
                    console.log("Spock smashes Scissors.");
                }
                else {
                this.playerOne.score++;
                    console.log("Scissors decapitates Lizard.");
                }
                break;
            case "Lizard":
                if(this.playerTwo.chosenGesture === "Spock"){
                    this.playerOne.score++;
                    console.log("Lizard poisons Spock.");
                }
                else if(this.playerTwo.chosenGesture === "Paper"){
                    this.playerOne.score++;
                    console.log("Lizard eats Paper.");
                }
                else{
                    this.playerTwo.score++;
                }
                break;
            case "Spock":
                if(this.playerTwo.chosenGesture === "Rock"){
                    this.playerOne++;
                    console.log("Spock vaporizes Rock.");
                }
                else if(this.playerTwo === "Paper"){
                    this.playerTwo.score++;
                    console.log("Paper disproves Spock");
                }
                else if(this.playerTwo.chosenGesture === "Scissors"){
                    this.playerOne.score++;
                    console.log("Spock smashes Scissors.");
                }
                else{
                    this.playerTwo.score++;
                }
                break;
                default:
                break;
        }
    }
    }

    runGame() {
        this.playerInfo();
        this.displayMessage();
        //Call a function that asks how many players and then creates appropriate human/AI for playerOne, playerTwo

        while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
            this.playerOne.chooseGesture(); 
            this.playerTwo.chooseGesture();
            this.compareGestures();
        }
        this.displayGameWinner();
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
        switch(humanPlayerGesture){
            case "1":
                this.chosenGesture = this.gameGestures[0];
                break;
            case "2":
                this.chosenGesture = this.gameGestures[1];
                break;
            case "3":
                this.chosenGesture = this.gameGestures[2];
                break;
            case "4":
                this.chosenGesture = this.gameGestures[3];
                break;
            case "5": 
             this.chosenGesture = this.gameGestures[4];
                break;
            default:
                this.chooseGesture();
                break;
        }
        console.log("Player " + this.super + "has chose the gesture of " + this.chosenGesture + "and has now achieved the score of " + this.score + ".");
    }
}

class AI extends Player {
    constructor(name) {
        super(name);
        this.score = 0;
    }
    
    chooseGesture() {
        // get a random number
        let randomNumber = this.generateRandomNumber(this.gameGestures.length);
        this.chosenGesture = this.gameGestures[randomNumber];
        console.log("Player " + this.super + "has chose the gesture of " + this.chosenGesture + "and has now achieved the score of " + this.score + ".");
    }
    generateRandomNumber(maximum) {
        let randomNumber = Math.floor(Math.random() * maximum);
        return randomNumber;
}
}





//Add Human and AI classes, slide 24 of JavascriptOOP lecture
//They will each override chooseGesture method

let game = new Game();
game.runGame();

