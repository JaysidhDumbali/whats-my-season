import React from 'react';
import './ErrorPage.css'



const ErrorPage = (props) => {

    return (
        <div className = {`error-page background`}> 
            <i className={`icon-left frown massive icon`}/>
            <h1>{props.message}</h1>
            <i className={`icon-right frown massive icon`}/>
        </div>
    );
};

export default ErrorPage;