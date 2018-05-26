import React from 'react';
import ReactDOM from 'react-dom';

const EditExpensePage = (props)=> {

    return (
        <div>
            Editing the expense with an id of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;