"use strict";

var multiplier = {
    numbers: [2, 6],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return _this.multiplyBy * number;
        });
    }
};
console.log(multiplier.multiply());
