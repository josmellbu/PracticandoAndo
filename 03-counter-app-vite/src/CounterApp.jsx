import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = (props) => {
    const {value}= props
    const [counter, setCounter] = useState( value );
    
    const handleAdd = () => {
        //console.log(event)
        setCounter(counter + 1)
    }

    const handleLess = () => setCounter(counter - 1)
    
    const handleRest = () => setCounter(value)
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleLess }>-1</button>
            <button onClick={ handleRest }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}