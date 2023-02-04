import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType = 'all' | 'dollar' | 'ruble'

export type BanknotsType = {
    banknots: string,
    nomital: number,
    number:  string
}

function App(): JSX.Element {

    const [money, setMoney] = useState<Array<BanknotsType>>([
        { banknots: 'dollar', nomital: 100, number: ' a1234567890' },
        { banknots: 'dollar', nomital: 50, number: ' z1234567890' },
        { banknots: 'ruble', nomital: 100, number: ' w1234567890' },
        { banknots: 'dollar', nomital: 100, number: ' e1234567890' },
        { banknots: 'dollar', nomital: 50, number: ' c1234567890' },
        { banknots: 'ruble', nomital: 100, number: ' r1234567890' },
        { banknots: 'dollar', nomital: 50, number: ' x1234567890' },
        { banknots: 'ruble', nomital: 50, number: ' v1234567890' },
    ])

    const [filter, setFiler] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'dollar') {
        currentMoney = money.filter( (el) => el.banknots === 'dollar')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter( (el) => el.banknots === 'ruble')
    }

    const onClickFilterHundler = (nameButton: FilterType) => {
        setFiler(nameButton)
    }

    return (
        <div>
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHundler}/>
        </div>
    );
}

export default App;
