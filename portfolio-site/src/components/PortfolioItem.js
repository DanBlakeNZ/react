import React from 'react';
import ReactDOM from 'react-dom';

const PortfolioItem = (props)=> (
    <div>
        <h1>A thing I have done</h1>
        <p>This page is for the item with the id of {props.match.params.id}</p>
    </div>
);

export default PortfolioItem;