/*Controllo*/
console.log('JS OK')

const multipleThreeText = 'Fizz';
const multipleFiveText = 'Buzz';

console.log(multipleFiveText, multipleThreeText)

for (let i = 1; i <= 100; i++){
    console.log(i)

    if (i % 3 === 0 && i % 5 === 0){
        console.log(multipleFiveText, multipleThreeText)
    } else if(i % 3 === 0){
        console.log(multipleThreeText)
    } else if (i % 5 === 0){
        console.log(multipleFiveText)
    } else {
        console.log('per nessuno')
    }
}
 
