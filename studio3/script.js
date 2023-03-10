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
            // console.log(`index: ${gameData.index}`);

            //when you exit the game, landing page shows up and score resets
            document.getElementById('quit').addEventListener("click", function(){
                location.reload();
                gameControl.className = "hidden";
            });
            // console.log("set up the turn!");
            setUpTurn();
        });

        // glenda added the event listeners for followAgain and pass here so they don't keep getting re-created in the followOrPass function

        followAgain.addEventListener('click', function() {
            // console.log('followagain clicked')
            beepSound.play();
            throwDice();  
        })

        pass.addEventListener('click', function() {
            beepSound.play();
            // switch player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // hide dice from previous player
            hideDice();
            setUpTurn();
        });

        function showOverlay() {
            hideDice();

            //show overlay
            game.className = "showing";
            
            overlay.className = "showing";

            //hide other stuff
            followAgain.className = "hidden";
            pass.className = "hidden";
        }

        function hideOverlay() {
            // glenda commented out showDice; should be called when player clicks "follow"
            // showDice();
            
            // glenda commented out bc we need game to show in order to see the die
            // game.className = "hidden";

            //hide overlay
            overlay.className = "hidden";

            //show other stuff
            followAgain.className = "showing";
            pass.className = "showing";
        }

        function showDice() {
            console.log('showing dice');
            dices.className = "showingDie";
        };
        function hideDice() {
            console.log('hiding dice');
            // dices.innerHTML = '';
            dices.className = "hidden";
        };

        function setUpTurn() {
            //overlay shows up
            hideDice();
            showOverlay();
            //player name changes to what's chosen
            playerName.innerHTML = `${gameData.players[gameData.index]}`;
            console.log(`Player is : ${gameData.players[gameData.index]}`);
            // console.log("roll the dice!");

            //after 2s, hide overlay to start playing
            setTimeout(hideOverlay, 2000);
            // glenda commented out showDice, should be called when follow is clicked
            // showDice();

             // glenda commented out because the event listeners just need to be called one time for your design
            //start playing
            // followOrPass();
        };
    
        // glenda commented out and moved the event listeners near the top of the script

        

        function throwDice() {
            //moved from showDice to throwDice
            // console.log('showDice function')
            // get random values for 1-6 for the score
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;

            //dice not showing up
            // showDice();

            // put the dice images on the screen; the dice array needs to be one less than the random value
            dices.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
            console.log(`dices.innerHTML: ${dices.innerHTML}`);

            // glenda added
            showDice();
            //adds the 2 rolls for total score
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            // console.log(`roll1: ${gameData.roll1}, roll2: ${gameData.roll2}, rollSum: ${gameData.rollSum}`);
            // showDice();

            // if two 1's are rolled
            if (gameData.rollSum === 2) {
                // switch players : if game data index is false = set index to 0 else, set index to 1 
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                //show overlay to inform that player is switching
                showOverlay();
                //change text
                document.querySelector(".warning").innerHTML = "Is it too late now to say SORRY? You got two Justin Bieber ;/";
                document.querySelector('.now-playing').innerHTML = "Switching to";
                //resets score to zero
                gameData.score[gameData.index] = 0;
                
                setTimeout(hideOverlay, 2000);
                //show the current score

                // glenda commented out
                setUpTurn();
                // dices.innerHTML = '';
            }
            // if either die is a 1 
            else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                //show overlay to inform that player is switching
                showOverlay();
                //change text
                document.querySelector(".warning").innerHTML = "SORRY, you got one Justin Bieber.";
                document.querySelector('.now-playing').innerHTML = "Switching to";
                
                setTimeout(hideOverlay, 2000);

                // glenda commented out
                setUpTurn();
                // dices.innerHTML = '';
            }
            else {
                //continue playing
                // console.log("the game proceeds");
                //add current score to the total score
                gameData.score[gameData.index] += gameData.rollSum;
                //either follow or pass

                // glenda commented out because the followAgain click is already being listened for
                // followOrPass();
                setTimeout(checkWinningCondition, 2000);
            }
        }; //end of throwDice function

       

        function checkWinningCondition() {
            // if score is bigger than 21 = end game
            if (gameData.score[gameData.index] > gameData.gameEnd) {
                //show overlay
                showOverlay();
                showCurrentScore();
                //change text
                document.querySelector(".warning").innerHTML = '';
                document.querySelector('.now-playing').innerHTML = '';
                document.querySelector('#wins').innerHTML = `wins with ${gameData.score[gameData.index]} points!`;

                setTimeout(function(){
                    dices.innerHTML = '';
                }, 1000);
                setTimeout(hideOverlay, 2000);
                setTimeout(function(){
                    document.getElementById('new-game').className = 'showing';
                    followAgain.className = "hidden";
                    pass.className = "hidden";
                    document.getElementById('quit').className = "hidden";
                    document.getElementById('new-game').addEventListener('click', function(){
                        location.reload();
                    });
                }, 2000);
                
                // setTimeout(showOverlay, 1000);
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

            // glenda suggests hiding dice when the score is showing
            hideDice();

            //only show for dices for 1s
            setTimeout(function(){
                // dices.innerHTML = '';
            }, 1000);
        };
}());