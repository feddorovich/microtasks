import React from 'react';

type ButtonType = {
    title: string
    callback: () => void
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};