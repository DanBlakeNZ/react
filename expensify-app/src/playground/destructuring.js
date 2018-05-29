// Array Destructuring //

const address = ['1299 Collins Street', 'Melbourne', 'Victoria', '3000'];

const [street, city, state = 'VIC', postCode] = address;

// console.log(`You are in ${city} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffee, , mediumPrice ] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}.`)






// Object Destructuring //

// const person = {
//     name: 'Daniel',
//     age: 34,
//     location: {
//         city: 'Melbourne',
//         temp: 17
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city, temperature){
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

