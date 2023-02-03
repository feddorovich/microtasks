import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {

    const Button1Foo = (subsctiber: string, age: number, address: string) => {
        console.log(subsctiber, age, address)
    }
    const Button2Foo = (subsctiber: string) => {
        console.log(subsctiber)
    }
    const Button3Foo = (subsctiber: string) => {
        console.log(subsctiber)
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Sergey', 20, 'Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Ivan')}/>
            <Button name={'Stupid Button'} callBack={() => Button3Foo('I am StupidButton')}/>
        </div>
    );
}

export default App;
