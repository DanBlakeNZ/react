import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisableExpenses from './selectors/expenses'

import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch(addExpense({ description:'Water Bill' }));
store.dispatch(addExpense({ description:'Gas Bill' }));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visableExpenses = getVisableExpenses(state.expenses, state.filters)
console.log(visableExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

