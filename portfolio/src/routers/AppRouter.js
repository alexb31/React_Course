import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
    <Router>
    <div>
        <Header />
    <Switch>
        <Route path="/" component={MainPage} exact={true}/>
        <Route path="/portfolio" component={PortfolioPage} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioItemPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
);

export default AppRouter;