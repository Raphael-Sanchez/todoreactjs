import React from 'react';

const Item = ({ label, onClick }) => {
    return (
        <div>
            <label>{label}</label>
            <button onClick={onClick}>x</button>
        </div>
    )
}

export default Item;