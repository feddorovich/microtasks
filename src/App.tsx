import React, {useState} from 'react';
import './App.css';

type FilterType = 'All' | 'Dollars' | 'Rubls'


function App():JSX.Element {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', nominal: 100, number: ' a1234567890'},
        {banknots: 'Dollars', nominal: 50, number: ' z1234567890'},
        {banknots: 'Rubls', nominal: 100, number: ' w1234567890'},
        {banknots: 'Dollars', nominal: 100, number: ' e1234567890'},
        {banknots: 'Dollars', nominal: 50, number: ' c1234567890'},
        {banknots: 'Rubls', nominal: 100, number: ' r1234567890'},
        {banknots: 'Dollars', nominal: 50, number: ' x1234567890'},
        {banknots: 'Rubls', nominal: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money;
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'Rubls') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Rubls')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        console.log(nameButton)
        setFilter(nameButton)
    }

    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyFrr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyFrr.banknots}</span>
                            <span> {objFromMoneyFrr.nominal}</span>
                            <span> {objFromMoneyFrr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('Rubls')}>Rubls</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </div>
    );
}

export default App;
