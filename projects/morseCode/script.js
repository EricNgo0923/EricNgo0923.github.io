let output = document.querySelector('#output');

const morseToLetters = new Map([
    [".-", 'A'],
    ["-...", 'B'],
    ["-.-.", 'C'],
    ["-..", 'D'],
    [".", 'E'],
    ["..-.", 'F'],
    ["--.", 'G'],
    ["....", 'H'],
    ["..", 'I'],
    [".---", 'J'],
    ["-.-", 'K'],
    [".-..", 'L'],
    ["--", 'M'],
    ["-.", 'N'],
    ["---", 'O'],
    [".--.", 'P'],
    ["--.-", 'Q'],
    [".-.", 'R'],
    ["...", 'S'],
    ["-", 'T'],
    ["..-", 'U'],
    ["...-", 'V'],
    [".--", 'W'],
    ["-..-", 'X'],
    ["-.--", 'Y'],
    ["--..", 'Z'],
    ["-----", '0'],
    [".----", '1'],
    ["..---", '2'],
    ["...--", '3'],
    ["....-", '4'],
    [".....", '5'],
    ["-....", '6'],
    ["--...", '7'],
    ["---..", '8'],
    ["----.", '9'],
    [".-.-.-", '.'],
    ["--..--", ','],
    ["..--..", '?'],
    [".----.", "'"],
    ["-.-.--", '!'],
    ["/", ' ']
]);

const lettersToMorse = new Map([
    ['A', ".-"],
    ['B', "-..."],
    ['C', "-.-."],
    ['D', "-.."],
    ['E', "."],
    ['F', "..-."],
    ['G', "--."],
    ['H', "...."],
    ['I', ".."],
    ['J', ".---"],
    ['K', "-.-"],
    ['L', ".-.."],
    ['M', "--"],
    ['N', "-."],
    ['O', "---"],
    ['P', ".--."],
    ['Q', "--.-"],
    ['R', ".-."],
    ['S', "..."],
    ['T', "-"],
    ['U', "..-"],
    ['V', "...-"],
    ['W', ".--"],
    ['X', "-..-"],
    ['Y', "-.--"],
    ['Z', "--.."],
    ['0', "-----"],
    ['1', ".----"],
    ['2', "..---"],
    ['3', "...--"],
    ['4', "....-"],
    ['5', "....."],
    ['6', "-...."],
    ['7', "--..."],
    ['8', "---.."],
    ['9', "----."],
    ['.', ".-.-.-"],
    [',', "--..--"],
    ['?', "..--.."],
    [",", ".----."],
    ['!', "-.-.--"],
    [' ', "/"]
]);

function enterML(){
    let output = document.querySelector('#output');
    let input = document.getElementById("input").value;
    let words = input.split(" ");
    let translated = '';
    output.innerText = '';
    for(i = 0; i < words.length; i++){
        let word = morseToLetters.get(words[i]);
        if(word != undefined){
            translated = translated + word;
        }else{
            output.innerText = "not valid";
        }
    }
    output.innerText = translated;
}

function enterLM(){
    let output = document.querySelector('#output');
    let input = document.getElementById("input").value;
    let translated = '';
    output.innerText = '';
    for(i = 0; i < input.length; i++){
        let letter = lettersToMorse.get(input.charAt(i).toUpperCase());
        if(letter != undefined){
            translated = translated + letter + " ";
        }else{
            output.innerText = "not valid";
        }
    }
    output.innerText = translated;
}