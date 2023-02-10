import React from 'react';
import {BanknotsType, FilterType} from "./App";

type NewComponentType = {
    currentMoney: Array<BanknotsType>
    onClickFilterHandler: (props : FilterType) => void
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map( (el, index) => {
                    return (
                        <li key={index}>
                            <span>{index}</span>
                            <span> {el.banknots}</span>
                            <span> {el.nomital}</span>
                            <span> {el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={()=> props.onClickFilterHandler('all')}>ALL</button>
                <button onClick={()=> props.onClickFilterHandler('ruble')}>RUBLES</button>
                <button onClick={()=> props.onClickFilterHandler('dollar')}>DOLLARS</button>
            </div>
        </div>
    );
};