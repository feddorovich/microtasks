import React, {useState} from 'react';
import './App.css';

function App(): JSX.Element {

    //let a = 1
    let [a, setA] = useState(1)

    const add = () => {
        setA (a = a + 1)
        console.log(a)
    }

    const reset = () => {
        setA (a = 0)
        console.log(a)
    }

    return (
        <div className={'App'}>
            <h1>{a}</h1>
            <button onClick={add}>ADD</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
}

export default App;
