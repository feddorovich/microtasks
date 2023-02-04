import React from 'react';
import {FilterType, MoneyType} from "./App2";

type PropsType = {
    filteredMoney: Array<MoneyType>
    onClickFilterHandler: (type: FilterType) => void
}

export const NewComponent2 = (props: PropsType) => {
    return (
        <div>
            {props.filteredMoney.map((el, index) => {
                return (
                    <ul key={index}>
                        <li>
                            <span>{index}</span>
                            <span> {el.banknots}</span>
                            <span> {el.nomital}</span>
                            <span> {el.number}</span>
                        </li>
                    </ul>
                )
            })}
            <div style={{marginLeft: "40px"}}>
                <button onClick={() => props.onClickFilterHandler('all')}>ALL</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>DOLLARS</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>RUBLS</button>
            </div>
        </div>
    );
};