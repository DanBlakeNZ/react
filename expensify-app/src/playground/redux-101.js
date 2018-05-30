import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {})=> ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {})=>({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ setCount = 0 } ={})=>({
    type: 'SET',
    setCount: setCount
});

const resetCount = ()=>({
    type: 'RESET'
})



const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        
        case 'RESET':
            return {
                count: state.count = 0
            }
        
        case 'SET':
            return {
                count: state.count = action.setCount
            }


        default:
            return state;
    }
});

store.subscribe( ()=> {
    console.log(store.getState())
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(resetCount());
store.dispatch(setCount({ setCount: 100 }))



