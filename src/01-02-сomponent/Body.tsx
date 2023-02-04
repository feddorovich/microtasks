import React from 'react';

type PropsBodyType = {
    title: string
}

export const Body = (props: PropsBodyType) => {
    return (
        <div>
            {props.title}
        </div>
    );
};