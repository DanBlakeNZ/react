import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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
});

// REMOVE_EXPENSE
const removeExpense = ( { 
        id 
    } = {} 
) => ({
    type:'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


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

        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates //this overrides any existing values from expense.
                    }
                }else{
                    return expense;
                }
            })

        default:
            return state;
    }

}


// FILTERS

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

const filtersReducer = (state = filtersReducerDefaultState, action ) => {
    switch (action.type){

        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }

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
    }),
    composeWithDevTools()
);

store.subscribe( ()=> {
    console.log(store.getState());
})


const expenseOne = store.dispatch(addExpense( { description:'Rent', amount: 100} ));
const expenseTwo = store.dispatch(addExpense( { description:'Coffee', amount: 300} ));

store.dispatch(removeExpense( {id: expenseOne.expense.id } ));
store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter(""));




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