import React, {ChangeEvent} from 'react';

type onChangePropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: onChangePropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.target.value)
    }

    return (
        <>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </>
    );
};