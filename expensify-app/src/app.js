import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
    <div>
        <p>This is from my dashboard component</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>This is from my Add Expense component</p>
    </div>
);

const EditExpensePage = ()=> (
    <div>
        <p>This is from my EditExpensePage</p>
    </div>
);

const HelpPage = ()=> (
    <div>
        <p>This is from my HelpPage</p>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));