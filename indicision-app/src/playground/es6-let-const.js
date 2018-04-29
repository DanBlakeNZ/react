var nameVar = 'Daniel';

console.log('nameVar', nameVar);

let nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);





// Block Scoping - const and let are blocked scoped.

var fullName = 'Daniel Blake';

if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName); // This will fail as it is blocked scoped inside the if statement, but if firstName was a var it would run and print firstName;