function range(start, end, step) {
    let range = [];
    if (step < 0) {
        for (let i = start; i >= end; i = i + step) {
            range.push(i); 
    } } else {
        for (let i = start; i <= end; i = i + step) {
            range.unshift(i);  
    } }
    return range;
}

function sum(array) {
    let sum = 0;
    for(let element of array) {
        sum += element;
    }
    return sum;
} 