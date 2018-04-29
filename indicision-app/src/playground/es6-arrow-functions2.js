

// argument object - no longer bound.

const addES5 = function (a,b){
    console.log(arguments); // arguments object displays ALL arguments passed.
    return a + b;
}
// console.log(addES5(55,1, 1001));


const addES6 = (a,b) => {
    //console.log(arguments); dont have acess to the arguments object in Arrow Functions.
    return a + b;
}
// console.log(addES6(55,1, 1001));







// this keyword - no longer bound.

const user = {
    name: 'Dan',
    cities: ['Wellington', 'Melbourne', 'Auckland'],

    // When we add a ES5 function/method on to an object property the 'this' value is bound to that object.
    // However we shouldn't use an arrow function here as it wont bind the 'this' value.
    // printPlaceLived: function(){ // old way of defining methods.
    printPlaceLived(){ // new syntax for defining methods.
        console.log(this.name);
        console.log(this.cities);

        //ES5
        // When we define an anonomys function there is no bound 'this' value, so we have to create another way to access it.
        const that = this;
        this.cities.forEach(function(city){ 
            console.log(that.name + ' has lived in ' + city);
        });


        // ES6 Arrow function
        // Arrow function dont bind their own 'this' value so you can easily access 'this'.
        this.cities.forEach((city)=>{ 
            console.log(this.name + ' has lived in ' + city);
        });
    },
    cityMessages(){
        //forEach just lets you do something with each array item, Map allows you to transform each item and get a new array back.
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

// user.printPlaceLived();
// console.log(user.cityMessages())



const multiplier = {
    numbers: [2,4,6,8],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply())