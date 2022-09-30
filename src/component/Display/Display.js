import React from 'react';
import Brand from '../Brand/Brand';

const Display = (props) => {
    return (
        <div style={{border: '2px solid grey', margin: '20px'}}>
            <h2>This is watch display.</h2>
            <p>Show watch display: {props.steps}</p>
            <Brand steps={props.steps}></Brand>
        </div>
    );
};

export default Display;