import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./FullInput";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

function App(): JSX.Element {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let objectMessage = {message: title}
        setMessage([objectMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
