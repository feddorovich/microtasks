import React, {useState} from 'react';
import './App.css';


function App() {

    // let a = 1

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const onClickHandler2 = () => {
        setA(a = 0)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    );
}

export default App;
