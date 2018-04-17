import React from 'react';

const Option = (props) => (
    <ul>
    <li>{props.optionText}</li>
    <button
    className="button button--link"
    onClick={(e) => {
        props.handleDeleteOption(props.optionText)
    }}
    >
    Remove
    </button>
    </ul>
);

export default Option;