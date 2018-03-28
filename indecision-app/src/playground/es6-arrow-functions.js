const square = function(x) {
    return x * x;
}

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(8));

const firstName = (fullName) => fullName.split(" ")[0];

console.log(firstName("Pierre B"));