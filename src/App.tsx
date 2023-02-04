import React from 'react';
import './App.css';
import {Button} from "./03-02-button/components/Button";

function App(): JSX.Element {

    const Button1Fun = (logInfo: string, logInfo2: number) => {
        console.log(logInfo, logInfo2)
    }
    const Button2Fun = (logInfo: string) => {
        console.log(logInfo)
    }

    const Button3Fun = (logInfo: string) => {
        console.log(logInfo)
    }

    return (
        <div className={'App'}>
            <Button name={'Button 1'} callBack={() => Button1Fun('logInfo 1', 20)}/>
            <Button name={'Button 2'} callBack={() => Button2Fun('logInfo 2')}/>
            <Button name={'Button 2'} callBack={() => Button2Fun('logInfo 2')}/>
        </div>
    );
}

export default App;
