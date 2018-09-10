import React from 'react';
import ExpenseList from './ExenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;