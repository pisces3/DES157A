(function() {
    //open iife
    "use strict";
    console.log("reading js");

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const playerName = document.getElementById('player-name');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    const overlay = document.getElementById('overlay');
    const dices = document.getElementById('dice-imgs');
    const diceOne = document.getElementById('dice-one');
    const diceTwo = document.getElementById('dice-two');
    const follow = document.getElementById("follow");
    const followAgain = document.getElementById("followagain");
    const pass = document.getElementById('pass');

    const gameData = {
            dice: ["images/jb.png", "images/two.png", "images/three.png", "images/four.png", "images/five.png", "images/six.png"],
            players: ['selenagomez', 'haileybieber'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 29
        };
        
        startGame.addEventListener('click', function() {
            //hide landing
            document.querySelector("#landing").className = "hidden";
            gameControl.className = "showing";
            //randomy set game index here
            gameData.index = Math.round(Math.random());
            console.log(`index: ${gameData.index}`);

            document.getElementById('quit').addEventListener("click", function(){
                location.reload();
                gameControl.className = "hidden";
            });
            console.log("set up the turn!");
            setUpTurn();
        });

        function setUpTurn() {
            game.className = "showing";
            playerName.innerHTML = `${gameData.players[gameData.index]}`;
            follow.className = "showing";

            follow.addEventListener("click", function() {
                console.log("roll the dice!");
                throwDice();
            });
        };

        function throwDice() {
            // game.className = "hidden";
            overlay.className = "hidden";
            follow.className = "hidden";
            // actionArea.innerHTML = '';
            // get random values for 1-6 for the score
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;

            // put the dice images on the screen; the dice array needs to be one less than the random value
            dices.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            console.log(gameData.rollSum);

            // if two 1's are rolled
            if (gameData.rollSum === 2) {
                overlay.className = "showing";
                console.log("snake eyes were rolled");
                document.querySelector("#overlay p").innerHTML = "Is it too late now to say SORRY? You got two Justin Bieber ;/";
                document.querySelector("#overlay h2").innerHTML = '';
                // overlay.className = "showing";
                // document.getElementById('two-ones').className = "showing";
                // overlay.innerHTML += '<p>Oh snap! Snake eyes!</p>';
                //resets score to zero
                gameData.score[gameData.index] = 0;
                // switch players : if game data index is false = set index to 0 else, set index to 1 
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                //show the current score
                setTimeout(setUpTurn, 2000);
            }
            // if either die is a 1 
            else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
                overlay.className = "showing";
                console.log("one of the two dice was a 1");
                document.querySelector("#overlay p").innerHTML = "SORRY, you got one Justin Bieber.";
                document.querySelector("#overlay h2").innerHTML = '';

                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                // document.getElementById('one-ones').className = "showing";
                // game.innerHTML += `<p>Sorry,, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000);
            }
            else {
                console.log("the game proceeds");
                gameData.score[gameData.index] += gameData.rollSum;
                followAgain.className = "showing";
                pass.className = "showing";
                // actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

                followAgain.addEventListener('click', function() {
                    // setUpTurn();
                    throwDice();
                });

                pass.addEventListener('click', function() {
                    // switch player
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });
                // checkWinningCondition();
            }
        };
}());