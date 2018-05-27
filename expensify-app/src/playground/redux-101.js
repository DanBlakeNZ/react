import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => { //sets the default state
    return state;
});

console.log(store.getState()) // returns the current state object.