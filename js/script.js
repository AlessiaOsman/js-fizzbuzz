/*Controllo*/
console.log('JS OK')

const multipleThreeText = 'Fizz';
const multipleFiveText = 'Buzz';

console.log(multipleFiveText, multipleThreeText)

const myContainer = document.getElementById('square-container')
let square = '<div class="d-flex flex-wrap gap-3 text-center">';
console.log(square)

let squareContent = ''

let bgColor = ''

for (let i = 1; i <= 100; i++){

    console.log(i);
    
    square += `<div class='square ${bgColor} border d-flex justify-content-center align-items-center col-1'>${squareContent}</div>`

    if (i % 3 === 0 && i % 5 === 0){
        console.log(multipleFiveText, multipleThreeText);
        squareContent = multipleThreeText+multipleFiveText;
        bgColor = 'bg-danger-subtle'
        
    } else if(i % 3 === 0){
        console.log(multipleThreeText);
        squareContent = multipleThreeText;
        bgColor = 'bg-success'

    } else if (i % 5 === 0){
        console.log(multipleFiveText);
        squareContent = multipleFiveText;
        bgColor = 'bg-warning'

    } else {
        squareContent = i
        bgColor = 'bg-info'
    }
}

square += '</div>';

myContainer.innerHTML = square;




 
