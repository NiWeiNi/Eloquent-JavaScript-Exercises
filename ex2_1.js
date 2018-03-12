// Check for code start time
const startingTime1 = performance.now();

// Define variable to store #
let octothorpe = "";

// Loop to create # lines
while (octothorpe.length < 8) {
    octothorpe += "#";
    console.log(octothorpe);
}

// CHeck for ending time
const endingTime1 = performance.now();
console.log('This code took ' + (endingTime1 - startingTime1) + ' milliseconds.');


// Check for code start time
const startingTime = performance.now();

// Define variable to store #
let pound = "";

// Loop to create # lines
for (let i = 1; i < 8; i ++) {
    pound += "#";
    console.log(pound);
}

// CHeck for ending time
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
