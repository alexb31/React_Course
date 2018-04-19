import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const expenseDashboardPage = () => (
    <div>
        <p>Expense Dashboard</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>Add Expense</p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p>Edit Expense</p>
    </div>
);

const HelpPage = () => (
    <div>
        <p>Help Page</p>
    </div>
);

const NotFoundPage = () => (
    <div>
        <p>Not Found Page</p>
    </div>
);

const routes = (
    <Router>
    <Switch>
        <Route path="/" component={expenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));