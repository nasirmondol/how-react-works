import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';
import Display from '../Display/Display';

const Device = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;