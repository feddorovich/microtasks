import React from 'react';
import './App.css';
import {Button} from "./03-03-button/components/Button";

function App(): JSX.Element {

    const funToLog = (props1: string, props2: number) => {
        console.log(props1, props2)
    }

    return (
        <div className={'App'}>
            <Button title={'Button'} callback={() => funToLog('Some text to log', 50)}/>
            <Button title={'Button 2'} callback={() => funToLog('New text to log', 500)}/>
        </div>
    );
}

export default App;
