class Person {
    constructor(name = 'Error', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi, my name is ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `and he's got a major in ${this.major}.`; 
        } else {
            description += `.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, hasMajor, homeLocation) {
        super(name, age, hasMajor);
        this.homeLocation = homeLocation;
    }
    
    getDescription() {
        let description = super.getDescription();

    if (this.homeLocation) {
        description += ` He moved to ${this.homeLocation}`;
    }

    return description;
    }
}

const me = new Student('Alex B', 22, '');
console.log(me.getDescription());

const other = new Traveler('rre', 3, 'WebDesign', 'Paris');

console.log(other.getDescription());