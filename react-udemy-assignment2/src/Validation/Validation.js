import React from 'react';

const validation = ( props ) => {
    // better way to do the if-else logic
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;

// could also use a ternary expression (?) above but use them with caution
/* below would work for the logic here in this file, but use with caution
{
    props.inputLength > 5 ?
        <p>Text long enough</p> :
        <p>Text too short</p>
}



*/