import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import ContactPage from '../components/Contact';
import DashboardPage from '../components/Dashboard';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioPage from '../components/Portfolio';
import PortfolioItemPage from '../components/PortfolioItem';

const AppRouter = ()=> (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
