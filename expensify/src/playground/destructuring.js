// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Paris',
//         temp: 26
//     }
// };

// const { name= 'Error', age } = person;

// const { temp: temperature, city } = person.location;

// console.log(`${name} is ${age}`);

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = "Error"} = book.publisher; 

console.log(publisherName);