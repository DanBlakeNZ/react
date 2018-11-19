import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Presentational Component
export const ExpenseList = (props) => ( // props is the value returned from the function below
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile">Expenses</div>
			<div className="show-for-desktop">Expense</div>
			<div className="show-for-desktop">Amount</div>
		</div>
		<div className="list-body">
			{
				props.expenses.length === 0 ? (
					<div className="list-item list-item--message">
						<span>No expenses</span>
					</div>
				) : (
						props.expenses.map((expense) => {
							return <ExpenseListItem key={expense.id} {...expense} />
						})
					)
			}
		</div>
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



