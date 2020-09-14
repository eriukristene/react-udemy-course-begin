import React from 'react';

// should make components with functions as much as possible
// only extend Component if you need to change the state
const userInput = (props) => {
    // JS object for styles
    // works as an inline style
    const inputStyle = {
        border: '2px solid red'
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />;
};

export default userInput;