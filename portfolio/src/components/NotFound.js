import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>404 - <Link to="/">Go Home</Link></p>
    </div>
);

export default NotFoundPage;