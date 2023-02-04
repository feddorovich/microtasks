import React from 'react';
import './App.css';
import {Button} from "./Button";

function App(): JSX.Element {

    const funWriteToLog = (props: string, props2?: number) => {
        console.log(props, props2)
    }

    return (
        <div className={'App'}>
            <Button title={'NEW BUTTON'} callBack={() => funWriteToLog('Text to LOG', 10)}/>
            <Button title={'NEW BUTTON 2'} callBack={() => funWriteToLog('New Text to LOG')}/>
        </div>
    );
}

export default App;
