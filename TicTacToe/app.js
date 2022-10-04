let grid = document.querySelector('.gameGrid');

const computerOption = document.querySelector('.computerOption');
const playerOption = document.querySelector('.playerOption');
const decisioning = document.querySelector('.decisonContainer');

const back = document.querySelector('.back');

let success = document.querySelector('.winnerContainer');
let winner = document.querySelector('.winner');

let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');

const scoreone = document.querySelector('.firstScore');
const scoretwo = document.querySelector('.secondScore');

const difficultyContainer = document.querySelector('.difficultyContainer');
const selection = Array.from(document.querySelectorAll('.selects'));


let v = 0;
let b = 0;



let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');


let spaces = Array.from(document.querySelectorAll('.space'));
let subspace = [];
let parspace = [];
let p = 0;

playerOption.addEventListener('click',()=>{
    decisioning.style.cssText = 'display: none;';
    spaces.forEach((space)=>{
        space.addEventListener('click', ()=>{
            console.log('works');
            if (p%2 == 0) {
                if (space.innerText == '') {
                    space.innerText = 'O';
                    checking();
                    p = ++p;
                    player1.classList.remove('activePlayer');
                    player2.classList.add('activePlayer');
                } else {
                    winner.innerHTML = " You can only play in an empty field"
                    success.style.display = 'flex'
                    setTimeout(() => {
                        success.style.display = 'none'
                        winner.innerHTML = '<div class="inner">Player <span class="wins"></span> wins</div>'
                    }, 2000);
                }
            }else {
                if (space.innerText == '') {
                    space.innerText = 'X';
                    checking();
                    p = ++p;
                    player2.classList.remove('activePlayer');
                    player1.classList.add('activePlayer');
                } else {
                    winner.innerHTML = " You can only play in an empty field"
                    success.style.display = 'flex'
                    setTimeout(() => {
                        success.style.display = 'none'
                        winner.innerHTML = '<div class="inner">Player <span class="wins"></span> wins</div>'
                    }, 2000);
                }
            }
        } )
    });
})
computerOption.addEventListener('click',()=>{
    difficultyContainer.style.display = 'flex';
        for (const select of selection) {
            select.addEventListener('click', (e)=>{
                switch (e.target.innerHTML) {
                    case "Impossible":
                        decisioning.style.cssText = 'display: none;';
                        difficultyContainer.style.display = 'none';
                        player2.innerHTML = 'Computer'
                        spaces.forEach((space)=>{
                            space.addEventListener('click', ()=>{
                                if (space.innerText == '') {
                                    space.innerText = 'O';
                                    checking();
                                    p = ++p;
                                    player1.classList.remove('activePlayer');
                                    player2.classList.add('activePlayer');
                                } else {
                                    winner.innerHTML = " You can only play in an empty field"
                                    success.style.display = 'flex'
                                    setTimeout(() => {
                                        success.style.display = 'none'
                                        winner.innerHTML = '<div class="inner">Player <span class="wins"></span> wins</div>'
                                    }, 2000);
                                }
                                
                                computerPlayImpossible();
                                checking();
                            });
                        });
                        break;
                    case "Hard":
                        decisioning.style.cssText = 'display: none;';
                        difficultyContainer.style.display = 'none';
                        player2.innerHTML = 'Computer'
                        spaces.forEach((space)=>{
                            space.addEventListener('click', ()=>{
                                if (space.innerText == '') {
                                    space.innerText = 'O';
                                    checking();
                                    p = ++p;
                                    player1.classList.remove('activePlayer');
                                    player2.classList.add('activePlayer');
                                } else {
                                    winner.innerHTML = " You can only play in an empty field"
                                    success.style.display = 'flex'
                                    setTimeout(() => {
                                        success.style.display = 'none'
                                        winner.innerHTML = '<div class="inner">Player <span class="wins"></span> wins</div>'
                                    }, 2000);
                                }
                                
                                computerPlayHard();
                                checking();
                            });
                        });
                        break;
                    case "Easy":
                        decisioning.style.cssText = 'display: none;';
                        difficultyContainer.style.display = 'none';
                        player2.innerHTML = 'Computer'
                        spaces.forEach((space)=>{
                            space.addEventListener('click', ()=>{
                                if (space.innerText == '') {
                                    space.innerText = 'O';
                                    checking();
                                    p = ++p;
                                    player1.classList.remove('activePlayer');
                                    player2.classList.add('activePlayer');
                                } else {
                                    winner.innerHTML = " You can only play in an empty field"
                                    success.style.display = 'flex'
                                    setTimeout(() => {
                                        success.style.display = 'none'
                                        winner.innerHTML = '<div class="inner">Player <span class="wins"></span> wins</div>'
                                    }, 2000);
                                }
                                
                                computerPlayStepOne();
                                checkingpro();
                            });
                        });
                        break;
                }
            })
        }
    // })
    // decisioning.style.cssText = 'display: none;';
    // player2.innerHTML = 'Computer'
    // spaces.forEach((space)=>{
    //     space.addEventListener('click', ()=>{
    //         console.log('works');
    //             if (space.innerText == '') {
    //                 space.innerText = 'O';
    //                 checking();
    //                 p = ++p;
    //                 player1.classList.remove('activePlayer');
    //                 player2.classList.add('activePlayer');
    //             } else {
    //                 winner.innerHTML = " You can only play in an empty field"
    //                 success.style.display = 'flex'
    //                 setTimeout(() => {
    //                     success.style.display = 'none'
    //                     winner.innerHTML = '<div class="inner">Player <span class="wins"></span> wins</div>'
    //                 }, 2000);
    //             }
                
    //             computerPlayStepOne();
    //             checkingpro();
    //     } )
    // });
})
back.addEventListener('click', ()=>{
    decisioning.style.display = 'flex';
    document.querySelector('.winnerContainer').style.display = 'none';
    spaces.forEach((space)=>{
        space.innerHTML = ''
    })
})


function checking() {
    if (one.innerHTML !== '') {
        if (one.innerHTML == two.innerHTML && two.innerHTML == three.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        } else if (one.innerHTML == four.innerHTML && four.innerHTML == seven.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        } else if (one.innerHTML == five.innerHTML && five.innerHTML == nine.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        }
    } if (two.innerHTML !== '') {
        if (two.innerHTML == five.innerHTML && five.innerHTML == eight.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        }
    } if (three.innerHTML !== '') {
        if (three.innerHTML == six.innerHTML && six.innerHTML == nine.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        } else if (three.innerHTML == five.innerHTML && five.innerHTML == seven.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        }
    } if (four.innerHTML !== '') {
        if (four.innerHTML == five.innerHTML && five.innerHTML == six.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        } else if (four.innerHTML == one.innerHTML && one.innerHTML == seven.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        }
    } if (seven.innerHTML !== '') {
        if (seven.innerHTML == eight.innerHTML && eight.innerHTML == nine.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        } else if (seven.innerHTML == five.innerHTML && five.innerHTML == three.innerHTML) {
            clearGrid()
            innerClear();
            checkingpro();

        }
    }
}

function checkingpro() {
    parspace = []
    spaces.forEach((space)=>{
        if (space.innerHTML == '') {
            parspace.push(space.innerHTML)
        }
    })
    checkingMax();
}

function checkingMax() {
    if(parspace[0] !== ''){
        if (parspace[1] !== '') {
            if (parspace[2] !== '') {
                if (parspace[3] !== '') {
                    if (parspace[4] !== '') {
                        if (parspace[5] !== '') {
                            if (parspace[6] !== '') {
                                winner.innerHTML = " You've reached a stalemate!"
                                success.style.display = 'flex'
                                setTimeout(() => {
                                    success.style.display = 'none'
                                    winner.innerHTML = '<div class="inner">Player <span class="wins"></span> wins</div>'
                                }, 2000);
                                spaces.forEach((space)=>{
                                    space.innerHTML = ''
                                })
                            }
                        }
                    }
                }
            }
        }
    }
}

function clearGrid() {
    if (player2.innerHTML == 'Computer') {
        document.querySelector('.inner').innerHTML = 'Player <span class="wins"></span> wins</div>';
    } else {
        if (p%2 == 0) {
            document.querySelector('.wins').innerHTML = '1';
            
        } else {
            document.querySelector('.wins').innerHTML = '2';
            
        }
    }
    
    
    document.querySelector('.winnerContainer').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.winnerContainer').style.display = 'none';
        spaces.forEach((space)=>{
            space.innerHTML = ''
        })
        if (player2.classList.contains('activePlayer')) {
            player1.classList.remove('activePlayer');
            player2.classList.add('activePlayer');
        } else {
            player2.classList.remove('activePlayer');
            player1.classList.add('activePlayer');
        }
    }, 2000);
}

function innerClear() {

    switch (p%2) {
        case 0:
            v = ++v;
                scoreone.innerText = v +'pts';
                console.log(scoreone.innerHTML);
            break;
    
        default:
            b = ++b;
            scoretwo.innerText = b +'pts';
            console.log(scoreone.innerHTML)
            break;
    }
}

function computerPlayStepOne() {
    subspace = [];
    spaces.forEach((space)=>{
        if (space.innerHTML == '') {
            subspace.push(space);
        }
    });
    computerPlayStepTwo();
}

function computerPlayImpossible() {
    if (five.innerHTML == '') {
        five.innerHTML = 'X';
    }else if (five.innerHTML == 'O') {
        one.innerHTML = 'X';
        
        if (five.innerHTML == four.innerHTML) {
            six.innerHTML == 'X';
        } if (five.innerHTML == six.innerHTML) {
            four.innerHTML == 'X';
        } if (five.innerHTML == seven.innerHTML) {
            three.innerHTML == 'X';
        } if (five.innerHTML == three.innerHTML) {
            seven.innerHTML == 'X';
        }
    } 
    if (one.innerHTML !== '') {
        if (one.innerHTML !== 'X') {
            if (one.innerHTML == two.innerHTML) {
                three.innerHTML = 'X';
            } if (one.innerHTML == three.innerHTML) {
                two.innerHTML = 'X';
            } if (one.innerHTML == four.innerHTML) {
                seven.innerHTML = 'X';
            } if (one.innerHTML == five.innerHTML) {
                nine.innerHTML = 'X';
            } if (one.innerHTML == seven.innerHTML) {
                four.innerHTML = 'X';
            }
        }
    } if (two.innerHTML !== '') {
        if (two.innerHTML !== 'X') {
            if (five.innerHTML !== 'X') {
                if (two.innerHTML == five.innerHTML) {
                    eight.innerHTML = 'X';
                } else  if (six.innerHTML == '') {
                    six.innerHTML = 'X';
                }
            
            }
        }
    } if (three.innerHTML !== '') {
        if (three.innerHTML !== 'X') {
            if (three.innerHTML == five.innerHTML) {
                seven.innerHTML = 'X';
            } if (three.innerHTML == six.innerHTML) {
                nine.innerHTML = 'X';
            } if (three.innerHTML == nine.innerHTML) {
                six.innerHTML = 'X';
            }
        }
    } if (three.innerHTML == '') {
        if (five.innerHTML !== '') {
            if (seven.innerHTML == five.innerHTML) {
                three.innerHTML = 'X';
            }
        }
    } 
    if (four.innerHTML !== '') {
        if (four.innerHTML !== 'X') {
            if (four.innerHTML == five.innerHTML) {
                six.innerHTML == 'X';
            }
        } if (one.innerHTML == '') {
            one.innerHTML = 'X';
        }
    } if (six.innerHTML !== '') {
        if (six.innerHTML !== 'X') {
            if (six.innerHTML == five.innerHTML) {
                four.innerHTML = 'X';
            }
        }
    } if (six.innerHTML == '') {
        if (five.innerHTML !== '') {
            if (four.innerHTML == five.innerHTML) {
                six.innerHTML = 'X';
            }
        }
    }
    if (seven.innerHTML !== '') {
        if (seven.innerHTML !== 'X') {
            if (seven.innerHTML == eight.innerHTML) {
                nine.innerHTML = 'X';
            } if (seven.innerHTML == nine.innerHTML) {
                eight.innerHTML = 'X';
            } if (seven.innerHTML == five.innerHTML) {
                three.innerHTML == 'X';
            }
        }
    } if (eight.innerHTML !== '') {
        if (eight.innerHTML !== 'X') {
            if (five.innerHTML !== '') {
                if (eight.innerHTML == five.innerHTML) {
                    two.innerHTML = 'X'
                } else if (six.innerHTML == '') {
                    six.innerHTML = 'X';
                }
            }
        }
    } if (nine.innerHTML !== '') {
        if (nine.innerHTML == eight.innerHTML) {
            seven.innerHTML = 'X'
        } if (nine.innerHTML == seven.innerHTML) {
            eight.innerHTML = 'X'
        }
    }
    
    
}

function computerPlayHard() {
    if (one.innerHTML !=='') {
        if (one.innerHTML == two.innerHTML) {
            three.innerHTML = 'X';
        } if (one.innerHTML == four.innerHTML) {
            seven.innerHTML = 'X';
        } if (one.innerHTML == five.innerHTML) {
            nine.innerHTML = 'X';
        }
    } if (two.innerHTML !== '') {
        if (two.innerHTML == five.innerHTML) {
            eight.innerHTML = 'X';
        } 
    } if (three.innerHTML !== '') {
        if (three.innerHTML == five.innerHTML) {
            seven.innerHTML = 'X';
        } if (three.innerHTML == six.innerHTML) {
            nine.innerHTML = 'X';
        }
    } if (seven.innerHTML !== '') {
        if (seven.innerHTML == eight.innerHTML) {
            nine.innerHTML = 'X';
        } 
    } if (nine.innerHTML !== 'X') {
        nine.innerHTML = 'X';
    }
}

function computerPlayStepTwo() {
    subspace[0].innerHTML = 'X';
    subspace.pop
}

