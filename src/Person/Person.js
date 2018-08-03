import React from 'react';

import style from './Person.css'

const person = (props) => {

    const styleBtn = {
        backgroundColor: '#fff',
        border: '1px solid red',
        color: 'red',
        padding : '5px 15px',
        margin : '0 15px',
        cursor: 'pointer'
    };

    return (
        <div className={style.Person}>
            <p>I'm  {props.name} and I'm  {props.age} years old!
                <button style={styleBtn} onClick={props.deleteHandler}>Delete</button> </p>
            <input onChange={props.onChangeHandler} value={props.name} />
            {props.children}
        </div>
    );
};

export default person;

