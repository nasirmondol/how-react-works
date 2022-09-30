import React from 'react';

const Brand = (props) => {
    return (
        <div style={{border: '2px solid grey', margin: '20px'}}>
            <h2 >This is my brand</h2>
            <p>Brand steps: {props.steps}</p>
        </div>
    );
};

export default Brand;