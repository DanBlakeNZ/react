//ES 5 function
function square (x){
    return x * x;
};

console.log(square(4));


// ES6 function
// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(5));




// ES6 Verbose Syntax
const getFirstName = (fullName) =>{
    return fullName.split(' ')[0];
}


// ES6 Expression Syntax
const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName("Daniel Blake"));
console.log(getLastName("Daniel Blake"))