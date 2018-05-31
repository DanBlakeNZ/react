import { createStore, combineReducers } from 'redux';

// Expenses Reducer

const expensesReducerDefaultState =[];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }

}

const filtersReducerDefaultState = {
    text: 'rent',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action ) => {
    switch (action.type){

        default:
            return state;
    }
}


// Filters Reducer


// Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filtersReducer: filtersReducer
    })
);

//key is rootstate name, value is the reducer
console.log(store.getState());







const demoState = {
    expenses: [{
        id: 'adsfasdfa',
        description: 'January Rent',
        note: 'This is the final rent',
        amount: 54000, // in cents
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};