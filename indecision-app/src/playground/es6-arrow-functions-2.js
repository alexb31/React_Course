const multiplier = {
    numbers: [2, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}; 
console.log(multiplier.multiply());