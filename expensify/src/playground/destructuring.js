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

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = "Error"} = book.publisher; 

// console.log(publisherName);

const adress = ['1299 Rue de la Paix', 'Paris', 'France', '75100'];

const [city, state] =  adress;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}`);