import React from "react";

const IncrementButton = ({ onClick }) => {
    return (
        <button data-test-id="increment-button" onClick={onClick}>+</button>
    );
};

export default IncrementButton;