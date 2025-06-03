let result = document.querySelector('.result');
let ans = 0;
let output = '';
let current = 0;
let previous = 0;
let operator = '';


function number(num){
    if(ans != 0 && operator == ''){
        reset();
    }
    current = current + num;
    output = output + num;
    result.innerText = output;
}

function operation(op){
    if(operator == '+'){
        previous = parseFloat(previous) + parseFloat(current);
    }else if(operator == '-'){
        previous = parseFloat(previous) - parseFloat(current);
    }else if(operator == '*'){
        previous = parseFloat(previous) * parseFloat(current);
    }else if(operator == '/' && current != '0'){
        previous = parseFloat(previous) / parseFloat(current);
    }else{
         previous = current;
    }

    current = '';
    operator = op;
    output = output + ' ' + op + ' ';
    result.innerText = output;
}

function enter(){
    result.innerHTML = '';
    if(current == '' || previous == ''){
        return;
    }

    if(operator == '+'){
        ans = parseFloat(previous) + parseFloat(current);
        result.innerText = output + ' = ' + ans;
    }else if(operator == '-'){
        ans = parseFloat(previous) - parseFloat(current);
        result.innerText = output + ' = ' + ans;
    }else if(operator == '*'){
        ans = parseFloat(previous) * parseFloat(current);
        result.innerText = output + ' = ' + ans;
    }else if(operator == '/' && current != '0'){
        ans = parseFloat(previous) / parseFloat(current);
        result.innerText = output + ' = ' + ans;
    }

    current = ans;
    output = ans;
    operator = '';

}

function reset(){
    output = '';
    current = '';
    previous = '';
    operator = '';
    ans = 0;
    result.innerText = '';
}



