import React, {useState} from 'react';
import './App.css';

function App(): JSX.Element {

    const [money, setMoney] = useState ([
        { banknots: 'dollar', nomital: 100, number: ' a1234567890' },
        { banknots: 'dollar', nomital: 50, number: ' z1234567890' },
        { banknots: 'ruble', nomital: 100, number: ' w1234567890' },
        { banknots: 'dollar', nomital: 100, number: ' e1234567890' },
        { banknots: 'dollar', nomital: 50, number: ' c1234567890' },
        { banknots: 'ruble', nomital: 100, number: ' r1234567890' },
        { banknots: 'dollar', nomital: 50, number: ' x1234567890' },
        { banknots: 'ruble', nomital: 50, number: ' v1234567890' },
    ])

    return (
        <div>

        </div>
    );
}

export default App;
