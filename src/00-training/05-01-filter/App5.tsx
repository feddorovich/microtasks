import React, {useState} from 'react';
import './App.css';
import {NewComponent5} from "./NewComponent5";

export type FilteredMoneyType = 'all' | 'dollar' | 'ruble'

export type MoneyPype = {
    banknots: string, nomital: number, number: string
}

function App(): JSX.Element {

    const [money, setMoney] = useState<Array<MoneyPype>>([
        {banknots: 'dollar', nomital: 100, number: ' a1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' z1234567890'},
        {banknots: 'ruble', nomital: 100, number: ' w1234567890'},
        {banknots: 'dollar', nomital: 100, number: ' e1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' c1234567890'},
        {banknots: 'ruble', nomital: 100, number: ' r1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' x1234567890'},
        {banknots: 'ruble', nomital: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilteredMoneyType>('all')

    let filteredMoney = money

    if (filter === 'dollar') {
        filteredMoney = money.filter( (el) => el.banknots === 'dollar')
    }
    if (filter === 'ruble') {
        filteredMoney = money.filter( (el) => el.banknots === 'ruble')
    }

    const onClickHandler = (props: FilteredMoneyType) => {
        console.log(props)
        setFilter(props)
    }

    return (
        <div>
            <NewComponent5 filteredMoney={filteredMoney} onClickHandler={onClickHandler}/>
        </div>
    );
}

export default App;
