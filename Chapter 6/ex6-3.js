// Define a Group class, like Set
class Group {
    constructor() {
        this.arraySet = [];
    }
    // Create an add items method
    add(element) {
        if(!this.has(element))
            this.arraySet.push(element);
    }
    // Reasign new group with all the elements except the eleemnt to delete 
    delete(element) {
        this.arraySet = this.arraySet.filter(el => el !== element);
    }
    // Check if it has the specified element
    has(element) {
        return this.arraySet.includes(element);
    }
    // Method that creates a group from an iterable object
    static from (iterableObject) {
        let group = new Group;
        for (let item of iterableObject) {
            group.add(item);
        }
        return group;
    }
    // Add iterator interface
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

// Iterator interface
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }
    // Iterator method
    next() {
        if (this.position >= this.group.arraySet.length) {
            return {done: true};
        } else {
            let result = {value: this.group.arraySet[this.position], done: false};
            this.position++;
            return result;
        }
    }
}