import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Presentational Component
const ExpenseList = (props) => ( // props is the value returned from the function below
    <div>
       <h1>Expense List</h1>
       { props.expenses.map((expense) => (
           <ExpenseListItem key={expense.id} { ...expense } />
       ))}
    </div>
)

const mapStateToProps = (state) => {
    // Here we are telling connect what we want to have connected (between our store and the connected component).
    //This function determines what information the component can access.
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

// connect returns a function, you then pass the component into the returned function
export default connect(mapStateToProps)(ExpenseList);



