import React from 'react';

type ButtonpropsType ={
    name: string
    callBack: () => void
}

export const Button = (props: ButtonpropsType) => {

    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </>
    );
};