import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

const Portfolio = ()=> (
    <div>
        <h1>My Work</h1>
        <p>Check out the following things I have done:</p>
        <Link to="/portfolio/123">Item One</Link>
        <Link to="/portfolio/321">Item two</Link>
    </div>
);

export default Portfolio;