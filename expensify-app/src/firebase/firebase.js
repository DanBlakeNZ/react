import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };











// child_removed subscription - shows what gets removed, fires when child gets removed
// database.ref('expenses').on(('child_removed'), (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// });

// // child_changed subscription - shows what gets changed, fires when child is changed
// database.ref('expenses').on(('child_changed'), (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// });

// // child_added subscription - shows what gets added, fires when child is added
// database.ref('expenses').on(('child_added'), (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//   console.log(expenses)
// });

//   database.ref('expenses').on(('value'), (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//   console.log(expenses);
// })

// database.ref('expenses').push({
//   discription: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });




// FETCH DATA FROM DATABASE

// Watches / subscribes to all changes
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is ${val.age} years old and lives in ${val.location.city}`);
// }, (error) => {
//   console.log('Error with data fetching', error)
// });

// Watches / subscribes to specific change
// database.ref('location/city').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(()=>{
//   database.ref('location/city').set('New York')
// }, 3000);

// setTimeout(()=>{
//   database.ref().off(onValueChange); // Stop listening to changes (unsubscribe)
// }, 5000);

// database.ref('location/city')
//   .once('value') // Gets the data a single time.
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e)=>{
//     console.log('Error fetching data', e)
//   })


// SET DATA EXAMPLES
// database.ref().set({
//   name: 'Dan',
//   age: 34,
//   isSingle: false,
//   location: {
//     city: 'Melbourne',
//     country: 'Australia'
//   }
// }).then(()=> {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log('This failed.', error)
// });

// database.ref('attributes').set({
//   height: 181,
//   weight: 83
// }).then(() => {
//   console.log('Attribute Data is saved');
// }).catch((error)=> {
//   console.log('Attribute Data did not save:', error);
// });

// database.ref('age').set(35);



// UPDATE DATA EXAMPLE
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   'location/city': 'Wellington', //unique syntax for firebase
//   isSingle: null, //removes/deletes isSingle
// }).then(()=> {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log('This failed.', error)
// });



// DELETE DATA EXAMPLE

// database.ref('isSingle').remove()
//   .then(()=>{
//     console.log('Data is removed')
//   }).catch((error) => {
//     console.log('Did not remove data.', error);
//   })