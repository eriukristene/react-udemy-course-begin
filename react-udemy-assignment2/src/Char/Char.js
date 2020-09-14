import React from 'react';

const char = (props) => {
    // using inline styles here, could also do an external CSS file with a class
    // and assign the class in the div below
    // would need to remember to import the CSS file in an import statement above
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;