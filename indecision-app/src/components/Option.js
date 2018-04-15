import React from 'react';

const Option = (props) => (
    <ul>
    <li>{props.optionText}</li>
    <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)
    }}
    >
    Remove
    </button>
    </ul>
);

export default Option;