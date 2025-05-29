let boxes = document.querySelectorAll('.box');
let result = document.querySelector('.result');
let reset = document.querySelector('#reset');
let player1 = true;
let noSpace = 0;
let winner;

reset.addEventListener('click', resetGame);

const wincon = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]];

boxes.forEach(turn);

function turn(box){
    box.addEventListener('click', function () {
        if(player1){
            box.innerText = 'X';
            box.style.backgroundColor = 'lightskyblue';
            box.disabled = true;
            player1 = false;
            check();
        }else{
            box.innerText = 'O';
            box.style.backgroundColor = 'LightPink';
            box.disabled = true;
            player1 = true;
            check();
        }   
    });

}

function check(){
    let finished = false;
    for(i = 0; i < wincon.length; i++){
        let noSpace = 0;
        let p1 = boxes[wincon[i][0]].innerText;
        let p2 = boxes[wincon[i][1]].innerText;
        let p3 = boxes[wincon[i][2]].innerText;

        if(p1 != "" && p2 != "" && p3 != "" && p1 == p2 && p1 == p3){
            finished = true;
            let winner = p1;
            result.innerText = 'The winner is ' + winner;
            disableAll();
        }

        if(!finished){
            for(j = 0; j < boxes.length; j++){
                if(boxes[j].innerText != ''){
                    noSpace++;
                }
            }
            if(noSpace == boxes.length){
                result.innerText = 'The game is a tie.';
            }

        }

    }

}

function disableAll(){
    for(i = 0; i < boxes.length; i++){
        boxes[i].disabled = true;
    }

}

function resetGame(){
    player1 = true;
    result.innerText = '';
    nospace = 0;
    for(i = 0; i < boxes.length; i++){
        boxes[i].innerText = '';
        boxes[i].disabled = false;
        boxes[i].style.backgroundColor = 'white';
    }

}



