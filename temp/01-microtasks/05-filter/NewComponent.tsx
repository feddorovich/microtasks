import React from "react";
import {currency, FilterType} from "./App";


type NewComponentProps = {
    currentMoney : Array<currency> ,
    onClickFilterHandler : (param : FilterType) => void
}

export const NewComponent : React.FC<NewComponentProps> = (props) => {

    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyFrr, index) => {
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
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Rubls')}>Rubls</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </div>
    )
}
