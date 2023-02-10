const game = () => {
    let pscore = 0;
    let cscore = 0;

// start
    const startgame = () => {
        const playbtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playbtn.addEventListener('click', () => {
            introscreen.classList.add('fadeout');
            match.classList.add('fadein');
        });
    };

// play

    const playmatch = () => {
        const option = document.querySelectorAll('.option button');
        const playerhand = document.querySelector('.player-hand');
        const computerhand = document.querySelector('.computer-hand');
        const hand = document.querySelectorAll('.hands img');

        hand.forEach(hand => {
            hand.addEventListener('animationed', function (){
                this.style.animation = "";
            });            
        });
        // Computer logic
        const computeroption = ['rock','scissors','paper'];

        option.forEach(option => {
            option.addEventListener("click", function(){
                //computer choice
                const computernumber = Math.floor(Math.random()*3);
                const computerchoice = computeroption[computernumber];

                setTimeout(()=>{
                    comparehands(this.textContent, computerchoice);
                    playerhand.src = `./assets/${this.textContent}.png`;
                    computerhand.src = `./assets/${computerchoice}.png`;
                }, 2000);
                //animation
                playerhand.style.animation = "shakeplayer 2s ease";
                computerhand.style.animation = "shakecomputer 2s ease";
            });
        });
    };
    const updatescore = () => {
        const playerscore = document.querySelector(".player-score p");
        const computerscore = document.querySelector(".computer-score p");
        playerscore.textContent = pscore;
        computerscore.textContent = cscore;
    };

    const comparehands = (playerchoice, computerchoice) => {
        //update text
        const winner = document.querySelector(".winner");
        //checking for a tie
        if (computerchoice === playerchoice){
            winner.textContent = "Seri";
            return;
        };
        // for a rock
        if (playerchoice === "rock"){
            if (computerchoice=== "scissors"){
                winner.textContent = "kamu menang";
                pscore++;
                updatescore();
                return;
            } else {
                winner.textContent = "kamu kalah";
                cscore++;
                updatescore();
                return;
            }
        }
        // for paper
        if (playerchoice === "paper"){
            if (computerchoice === "scissors"){
                winner.textContent = "kamu kalah";
                cscore++;
                updatescore();
                return;
            } else {
                winner.textContent = "kamu menang";
                pscore++;
                updatescore();
                return;
            }
        }

        // for scissors
        if (playerchoice === "scissors"){
            if (computerchoice === "rock"){
                winner.textContent = "kamu kalah";
                cscore++;
                updatescore();
                return;
            } else {
                winner.textContent = "kamu menang";
                pscore++;
                updatescore();
                return;
            }
        }
    };

    // is all inner function
    startgame();
    playmatch();
};

//lets start
game();