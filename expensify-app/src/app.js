import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my Add Expense component
    </div>
);

const EditExpensePage = ()=> (
    <div>
        This is from my EditExpensePage
    </div>
);

const HelpPage = ()=> (
    <div>
        This is from my HelpPage
    </div>
);

const NotFoundPage = ()=> (
    <div>
       404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch> // Like a JS switch this will go through the below routes and look for a match and then stop
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));