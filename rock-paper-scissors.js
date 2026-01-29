  let score = JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            };
            updateScoreElement();
            /*const score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
            */

            function autoplay(){
                setInterval(() => {
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                }, 1000);
            }

            function playGame(playerMove){
                const computerMove = pickComputerMove();
                let result = ' ';
                 if (playerMove === 'Scissors'){
                    
                    if (computerMove === 'Rock'){
                        result = 'You lose'; 
                    }
                    else if (computerMove === 'Paper'){
                        result = 'You win';
                    }
                    else if (computerMove === 'Scissors'){
                        result = 'Tie';
                    }
                 }
                 else if (playerMove === 'Paper'){

                    if (computerMove === 'Rock'){
                        result = 'You win';
                     }
                    else if (computerMove === 'Paper'){
                        result = 'Tie';
                    }
                    else if (computerMove === 'Scissors'){
                        result = 'You lose';
                    }
                 }
                else if (playerMove === 'Rock'){
                    if (computerMove === 'Rock'){
                            result = 'Tie';
                        }
                        else if (computerMove === 'Paper'){
                            result = 'You lose';
                        }
                        else if (computerMove === 'Scissors'){
                            result = 'You win';
                        }
                    }
                
            if (result === 'You win'){
                score.wins++;
             }
             else if (result === 'You lose'){
                score.losses++;
             }
             else if (result === 'Tie'){
                score.ties++;
             }
             localStorage.setItem('score', JSON.stringify(score));

                updateScoreElement();

                document.querySelector('.js-result')
                    .innerHTML = `${result}`;

                document.querySelector('.js-moves')
                    .innerHTML = ` You 
            <img src="assets/${playerMove}-emoji.png" class="move-pick">
            <img src="assets/${computerMove}-emoji.png" class="move-pick">
            computer<p>`;
            }

            function pickComputerMove(){
                let computerMove = ' ';
                 const randomNumber = Math.random();

                if (randomNumber >= 0 && randomNumber < (1/3)){
                        computerMove = 'Rock';
                    }
                else if (randomNumber >= (1/3) && randomNumber < (2/3)){
                    computerMove = 'Paper';
                }
                else if (randomNumber >= (2/3) && randomNumber < 1){
                    computerMove = 'Scissors';
                }
                return computerMove;
            }
            function updateScoreElement(){
                document.querySelector('.js-score')
                    .innerHTML = `Wins: ${score.wins},
                    Losses: ${score.losses}, Ties: ${score.ties}`;   
            }