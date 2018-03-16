function reverseArray(array) {
    let tempValue, j = array.length-1;
    for (let i = 0; i <= array.length/2; i++) {
        tempValue = array[i];
        array[i] = array[j];
        array[j] = tempValue;
        j -= 1; 
    }
    return array;
}   

function reverseArrayInPlace(array) {
    let tempValue, j = array.length-1;
    for (let i = 0; i <= array.length/2; i++) {
        tempValue = array[i];
        array[i] = array[j];
        array[j] = tempValue;
        j -= 1; 
    }
    return array;
}   