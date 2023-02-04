import React from 'react';
import {PropsArrayType, PropsMoneyType} from "./App3";

type NewComponentType = {
    filteredMoney: Array<PropsArrayType>
    onClickHandler: (pr: PropsMoneyType) => void
}

export const NewComponent3 = (props: NewComponentType) => {
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
                <button onClick={() => props.onClickHandler('all')}>ALL</button>
                <button onClick={() => props.onClickHandler('dollar')}>DOLLARS</button>
                <button onClick={() => props.onClickHandler('ruble')}>RUBLES</button>
            </div>
        </div>
    );
};