import React, {useState} from 'react';
import './App.css';
import {NewComponent3} from "./NewComponent3";

export type PropsMoneyType = 'all' | 'dollar' | 'ruble'

export type PropsArrayType = {
    banknots: string, nomital: number, number: string
}

function App(): JSX.Element {

    const [money, setMoney] = useState<Array<PropsArrayType>>([
        {banknots: 'dollar', nomital: 100, number: ' a1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' z1234567890'},
        {banknots: 'ruble', nomital: 100, number: ' w1234567890'},
        {banknots: 'dollar', nomital: 100, number: ' e1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' c1234567890'},
        {banknots: 'ruble', nomital: 100, number: ' r1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' x1234567890'},
        {banknots: 'ruble', nomital: 50, number: ' v1234567890'},
    ])

    let [filter, setFiler] = useState<PropsMoneyType>('all')

    let filteredMoney = money
    if (filter === 'dollar') {
        filteredMoney = money.filter((el) => el.banknots === 'dollar')
    }
    if (filter === 'ruble') {
        filteredMoney = money.filter((el) => el.banknots === 'ruble')
    }

    const onClickHandler = (props: PropsMoneyType) => {
        console.log(props)
        setFiler(props)
    }

    return (
        <div>
            <NewComponent3 filteredMoney={filteredMoney} onClickHandler={onClickHandler}/>
        </div>
    );
}

export default App;
