import React, { useState, useEffect } from "react";
import style from "./choice.module.css";

const Choice = React.forwardRef((props, ref) => {
    const { options, hasBeenChecked } = props;

    const handleClick = (e) => {
        if (hasBeenChecked) return null;
        setSelectedIndex(e.target.value);
        ref.current = e.target;
    };

    useEffect(() => {
        setSelectedIndex(-1);
        ref.current = undefined;
    }, [options]);

    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <div className={style.buttonContainer}>
            {options.map((e, index) => (
                <button
                    key={`choice_${index}`}
                    onClick={handleClick}
                    value={index}
                    className={
                        index == selectedIndex
                            ? `${style.button} ${style.selected}`
                            : style.button
                    }>
                    {e}
                </button>
            ))}
        </div>
    );
});

export default Choice;
