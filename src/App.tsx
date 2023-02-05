import React, {useState} from 'react';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

function App(): JSX.Element {

    const [money, setMoney] = useState([
        {banknots: 'dollar', nomital: 100, number: ' a1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' z1234567890'},
        {banknots: 'ruble', nomital: 100, number: ' w1234567890'},
        {banknots: 'dollar', nomital: 100, number: ' e1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' c1234567890'},
        {banknots: 'ruble', nomital: 100, number: ' r1234567890'},
        {banknots: 'dollar', nomital: 50, number: ' x1234567890'},
        {banknots: 'ruble', nomital: 50, number: ' v1234567890'},
    ])

    let filteredMoney = money.filter( (el) => el.banknots === 'dollar')

    const onClickHandler = (props: string) => {
        console.log(props)
    }

    return (
        <div>
            {filteredMoney.map( (el,index) => {
                return (
                    <ul key={index}>
                        <li>
                            <span>{index}</span>
                            <span>{el.banknots}</span>
                            <span>{el.nomital}</span>
                            <span>{el.number}</span>
                        </li>
                    </ul>
                )
            })}
            <div style={{marginLeft: '40px'}}>
                <button onClick={()=> onClickHandler('all')}>ALL</button>
                <button >ALL</button>
                <button >ALL</button>
            </div>
        </div>
    );
}

export default App;
