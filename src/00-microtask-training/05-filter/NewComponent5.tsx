import React from 'react';
import {FilteredMoneyType, MoneyPype} from "./App5";

type PropsType = {
    filteredMoney: Array<MoneyPype>
    onClickHandler: (props: FilteredMoneyType) => void

}

export const NewComponent5 = (props: PropsType) => {
    return (
        <div>
            {props.filteredMoney.map((el, index) => {
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
                <button onClick={() => props.onClickHandler('all')}>ALL</button>
                <button onClick={() => props.onClickHandler('dollar')}>DOLLARS</button>
                <button onClick={() => props.onClickHandler('ruble')}>RUBLES</button>
            </div>
        </div>
    );
};