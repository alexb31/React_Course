import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

const PortfolioPage = (props) => {
  console.log(props);
    return (
        <div>
            <ul>
                <li><NavLink to="/portfolio/1" activeClassName="is-active">Work 1</NavLink></li>
                <li><NavLink to="/portfolio/2" activeClassName="is-active">Work 2</NavLink></li>
            </ul>
        </div>
    );
};

export default PortfolioPage;