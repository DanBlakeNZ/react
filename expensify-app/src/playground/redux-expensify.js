import { createStore, combineReducers } from 'redux';

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