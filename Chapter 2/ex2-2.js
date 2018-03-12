// Define variable
let number = 1;

// Define loop
for (let i = 0; i < 100; i++) {
    if (number % 3 === 0) {
        console.log("Fizz");
    }
    else if (number % 5 === 0 && number % 3 !== 0) {
        console.log("Buzz");
    }
    else {
        console.log(number);
    }
    number++;
}

// Modify previous to print FizzBuzz for %3 and %5
let newNumber = 1;

for (let i = 0; i < 100; i++) {
    if (newNumber % 3 === 0 && newNumber % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if(newNumber % 3 === 0) {
        console.log("Fizz");
    }
    else if (newNumber % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(newNumber);
    }
    newNumber++;
}