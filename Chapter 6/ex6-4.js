let map = {one: true, two: true, hasOwnProperty: true};

// Call the hasOwnProperty on property one of the map object
console.log(Object.prototype.hasOwnProperty.call(map, "one"));