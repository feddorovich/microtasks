import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./06-input/components/FullInput";
import {Input} from "./06-input/components/Input";
import {Button} from "./06-input/components/Button";

function App(): JSX.Element {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')
    console.log(title)


    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHundler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}

            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={()=>{callBackButtonHundler()}}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
