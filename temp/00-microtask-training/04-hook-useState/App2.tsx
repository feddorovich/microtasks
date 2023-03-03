import React, {useState} from 'react';
import './App.css';

function App(): JSX.Element {

    // let a = 1

    let [a, setA] = useState(0)

    const add1toNumber = () => {
        setA(a = a + 1)
        console.log(a)
    }

    const resetCount = () => {
        setA(a = 0)
    }

    return (
        <div className={'App'}>
            <h1>Humber: {a}</h1>
            <button onClick={add1toNumber}>ADD 1 TO NUMBER</button>
            <button onClick={resetCount}>RESET COUNT</button>
        </div>
    );
}

export default App;
