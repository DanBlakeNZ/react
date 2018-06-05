import React from 'react';
import { connect } from 'react-redux';


// Presentational Component
const ExpenseList = (props) => ( // props is the value returned from the function below
    <div>
       <h1>Expense List</h1>
       {props.filters.text}
       {props.expenses.length}
    </div>
)

const mapStateToProps = (state) => {
    // Here we are telling connect what we want to have connected (between our store and the connected component).
    //This function determines what information the component can access.
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

// connect returns a function, you then pass the component into the returned function
export default connect(mapStateToProps)(ExpenseList);



