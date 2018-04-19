import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>DashBoard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Add Expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Get Help</NavLink></li>
        </ul>
    </header>
);

export default Header;