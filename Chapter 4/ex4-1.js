function range(start, end, step) {
    let range = [];
    for (let i = start; i <= end; i = i + step) {
        range.push(i);  
    }
    return range;
}