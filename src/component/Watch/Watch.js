import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const handleRunning = () =>{
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    useEffect( () =>{
        console.log(steps)
    },[steps])
    return (
        <div style={{border: '2px solid green', margin: '20px'}}>
            <h2>This is my smart watch</h2>
            <h6>My running steps: {steps}</h6>
            <button onClick={handleRunning}>Running</button>
            <Display steps={steps}></Display>
        </div>
    );
};

export default Watch;