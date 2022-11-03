import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';

console.log(CounterApp)


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<FirstApp title = "hola, soy goku" subtitle="planeta tierra" name=''/>*/}
        <CounterApp value={20}/>
    </React.StrictMode>
);
