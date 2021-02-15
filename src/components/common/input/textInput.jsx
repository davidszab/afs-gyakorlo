import React from "react";

const TextInput = React.forwardRef((props, ref) => {
    return (
        <input
            type="text"
            autoFocus
            ref={ref}
            onKeyPress={props.handleKeyPress}></input>
    );
});

export default TextInput;
