import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



// ADD_EXPENSE
const addExpense = ( {
        description = '', 
        note ='', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description, //description: description
        note,
        amount,
        createdAt
    }
})

const removeExpense = ( { 
        id 
    } = {} 
) => ({
    type:'REMOVE_EXPENSE',
    id
})


// Expenses Reducer
const expensesReducerDefaultState =[];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    
    switch (action.type) {

        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]
        
        case "REMOVE_EXPENSE":
            return state.filter(( {id} ) => id !== action.id )

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

store.subscribe( ()=> {
    console.log(store.getState());
})


const expenseOne = store.dispatch(addExpense( { description:'Rent', amount: 100} ));
const expenseTwo = store.dispatch(addExpense( { description:'Coffee', amount: 300} ));

store.dispatch(removeExpense( {id: expenseOne.expense.id } ));




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