import React from "react";
import "./Input.css";

const Input = ({ attribute, onChange, param }) => {
    return (
        <div className="input-container">
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange= {(e) => (e.target.value)}
            className="regular-style"
            required
            />
        </div>
    )
};

export default Input;