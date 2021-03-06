import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

// For use with redux + dev tools //

// export default () => {
//     const store = createStore(
//         combineReducers({
//             expenses: expensesReducer,
//             filters: filtersReducer
//         }),
//         composeWithDevTools()
//     );

//     return store;
// }


// For use with redux, redux thunk + dev tools //
export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
			auth: authReducer
		}),
		compose(
			applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
	);
	return store;
}