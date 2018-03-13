function isEven (N) {
    if (N < 0) {
        console.log("Only positive whole numbers, please");
    }
    else if (N==1) {
        console.log("Odd");
        return false;
    }
    else if (N==0) {
        console.log("Even");
        return true;
    }
    else {
        return isEven(N-2);
    }
}