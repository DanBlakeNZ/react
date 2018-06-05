import React from 'react';
import ReactDOM from 'react-dom';


// Standard Component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    // returns the highter order component
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, please dont share</p> }
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : "Please log in"}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById('app'));