import React from 'react';
import {ArrayMoneyType, MoneyType} from "./App4";

type NewComponentType ={
    filteredMoney: Array<ArrayMoneyType>
    onClickHandler: (props: MoneyType) => void
}

export const NewComponent4 = (props: NewComponentType) => {
    return (
        <div>
            {props.filteredMoney.map((el, index) => {
                return (
                    <ul key={index}>
                        <li>{index + 1}</li>
                        <li>{el.banknots}</li>
                        <li>{el.nomital}</li>
                        <li>{el.number}</li>
                    </ul>
                )
            })}
            <div style={{marginLeft: "40px"}}>
                <button onClick={() => props.onClickHandler('all')}>ALL</button>
                <button onClick={() => props.onClickHandler('dollar')}>DOLLARS</button>
                <button onClick={() => props.onClickHandler('ruble')}>RUBLES</button>
            </div>
        </div>
    );
};