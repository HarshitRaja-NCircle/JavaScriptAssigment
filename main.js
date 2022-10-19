class Main {
    evenOrOdd(array){
        if((array.length) % 2 === 0){
            console.log('Even');
        }
        else{
            console.log('Odd');
        }
    }

    printOutput(array){
        array.forEach(element => {
            console.log(element);
        });
    }
}

let a = new Main();
let num = 9
let factors = [];

for (let i = 1; i <= num; i++) {

    if (num % i == 0) {
        factors.push(i);
    }
}
console.log("The Number is :- ",num);

a.printOutput(factors);
a.evenOrOdd(factors);
