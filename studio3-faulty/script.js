(function() {
    //open iife
    "use strict";
    console.log("reading js");

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const playerName = document.getElementById('player-name');
    const overlay = document.getElementById('overlay');
    const dices = document.getElementById('dice-imgs');
    const followAgain = document.getElementById("followagain");
    const pass = document.getElementById('pass');
    const selenaFollowers = document.getElementById('selena-score');
    const haileyFollowers = document.getElementById('hailey-score');
    const beepSound = new Audio('sounds/beep.mp3');
    const notifSound = new Audio('sounds/notif.mp3');

    const gameData = {
            dice: ["images/jb.png", "images/two.png", "images/three.png", "images/four.png", "images/five.png", "images/six.png"],
            players: ['selenagomez', 'haileybieber'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 21
        };

        
        
        startGame.addEventListener('click', function() { //when you click play game
            notifSound.play();
            //hide landing
            document.querySelector("#landing").className = "hidden"; //handing page is hidden
            gameControl.className = "showing"; //shows the main page
            //randomy set game index here
            gameData.index = Math.round(Math.random()); 
            console.log(`index: ${gameData.index}`);

            //when you exit the game, landing page shows up and score resets
            document.getElementById('quit').addEventListener("click", function(){
                location.reload();
                gameControl.className = "hidden";
            });
            console.log("set up the turn!");
            setUpTurn();
        });

        function showOverlay() {
            //show overlay
            game.className = "showing";
            overlay.className = "showing";

            //hide other stuff
            dices.className = "hidden";
            followAgain.className = "hidden";
            pass.className = "hidden";
        }

        function hideOverlay() {
            //hide overlay
            overlay.className = "hidden";

            //show other stuff
            dices.className = "showing";
            followAgain.className = "showing";
            pass.className = "showing";
        }

        function setUpTurn() {
            //overlay shows up 
            showOverlay();
            //player name changes to what's chosen
            playerName.innerHTML = `${gameData.players[gameData.index]}`;
            console.log("roll the dice!");

            //after 2s, hide overlay to start playing
            setTimeout(hideOverlay, 2000);

            //start playing
            followOrPass();
        };

        

        function followOrPass() {
            //when click on followAgain button, throw dice
            followAgain.addEventListener('click', function() {
                beepSound.play();
                throwDice();
            });

            //when click pass button
            pass.addEventListener('click', function() {
                beepSound.play();
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
        }; //end followOrPass

        function showDice() {
            // get random values for 1-6 for the score
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;

            // put the dice images on the screen; the dice array needs to be one less than the random value
            dices.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
            //adds the 2 rolls for total score
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            console.log(gameData.rollSum);
        };

        function throwDice() {
            showDice();

            // if two 1's are rolled
            if (gameData.rollSum === 2) {
                console.log("snake eyes were rolled");
                //change text
                document.querySelector(".warning").innerHTML = "Is it too late now to say SORRY? You got two Justin Bieber ;/";
                document.querySelector('.now-playing').innerHTML = "Switching to";
                //resets score to zero
                gameData.score[gameData.index] = 0;
                // switch players : if game data index is false = set index to 0 else, set index to 1 
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                //show the current score
                setUpTurn();
                // dices.innerHTML = '';
            }
            // if either die is a 1 
            else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
                // overlay.className = "showing";
                console.log("one of the two dice was a 1");
                //change text
                document.querySelector(".warning").innerHTML = "SORRY, you got one Justin Bieber.";
                document.querySelector('.now-playing').innerHTML = "Switching to";
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                // dices.innerHTML = '';
            }
            else {
                //continue playing
                console.log("the game proceeds");
                //add current score to the total score
                gameData.score[gameData.index] += gameData.rollSum;
                //either follow or pass
                followOrPass();
                setTimeout(checkWinningCondition, 2000);
            }
        }; //end of throwDice function

       

        function checkWinningCondition() {
            // if score is bigger than 21 = end game
            if (gameData.score[gameData.index] > gameData.gameEnd) {
                //show overlay
                showOverlay();
                //change text
                document.querySelector(".warning").innerHTML = '';
                document.querySelector('.now-playing').innerHTML = '';
                document.querySelector('#wins').innerHTML = `wins with ${gameData.score[gameData.index]} points!`;

                //change to quit
                document.getElementById('quit').innerHTML = "Start a New Game?";
                setTimeout(function(){
                    dices.innerHTML = '';
                }, 1000);
            }
            else {
                //show current score
                showCurrentScore();
            }
        };

        function showCurrentScore() {
            //show selena's score
            selenaFollowers.innerHTML = `${gameData.score[0]}M`;
            haileyFollowers.innerHTML = `${gameData.score[1]}M`;

            //only show for dices for 1s
            setTimeout(function(){
                dices.innerHTML = '';
            }, 1000);
        };
}());