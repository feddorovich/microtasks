import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./FullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";
import {logDOM} from "@testing-library/react";

function App(): JSX.Element {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')
    console.log(title)

    const addMessage = (title: string) => {
        let object = {message: title}
        setMessage([object, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={()=>{callBackButtonHandler()}}/>
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
