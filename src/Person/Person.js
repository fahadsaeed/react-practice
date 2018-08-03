import React from 'react';

import './Person.css'

const person = (props) => {

    const style = {
        backgroundColor: '#fff',
        border: '1px solid red',
        color: 'red',
        padding : '5px 15px',
        margin : '0 15px',
        cursor: 'pointer'
    };

    return (
        <div className="Person">
            <p>I'm  {props.name} and I'm  {props.age} years old!
                <button style={style} onClick={props.deleteHandler}>Delete</button> </p>
            <input onChange={props.onChangeHandler} value={props.name} />
            {props.children}
        </div>
    );
};

export default person;

