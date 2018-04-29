class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi I am ${this.name}!`;
    }

    getDiscription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age); //calls the PARENT CONSTRUCTOR function.
        this.major = major;
    }

    hasMajor(){
        return !!this.major
    }

    getDiscription(){ // overrides the parent method of the same name.
        let description = super.getDiscription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    };

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Traveler('Daniel Blake', 34, 'Melbourne');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());


