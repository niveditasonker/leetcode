class ListOfListsIterator {
    constructor(data) {
        this.data = data;
        this.row = 0;
        this.col = 0;
    }

    hasNext() {
        return this.row < this.data.length;
    }

    next() {
        if (!this.hasNext()) {
            throw new Error("No more elements in the list of lists");
        }

        const currentElement = this.data[this.row][this.col];

        this.col++;
        if (this.col >= this.data[this.row].length) {
            this.row++;
            this.col = 0;
        }

        return currentElement;
    }

    remove() {
        if (this.col === 0) {
            // Remove the entire current row
            this.data.splice(this.row, 1);
        } else {
            // Remove the current element from the current row
            this.data[this.row].splice(this.col - 1, 1);
        }

        if (this.data[this.row].length === 0) {
            // If the current row is empty, remove it
            this.data.splice(this.row, 1);
        }

        // Adjust the position to be at the start of the next element
        this.col = 0;
    }
}

// Example usage:

const data = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

const iterator = new ListOfListsIterator(data);

while (iterator.hasNext()) {
    const element = iterator.next();
    console.log(element);
    iterator.remove();
}

console.log(data);  // The original list of lists with elements removed
