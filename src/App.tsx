import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./00-training/05-02-input/FullInput";

function App(): JSX.Element {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    return (
        <div className={'App'}>
            <FullInput />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
