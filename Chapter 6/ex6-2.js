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
}