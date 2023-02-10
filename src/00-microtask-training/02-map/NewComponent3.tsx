import React from 'react';

type PropsType = {
    cars: Array<PropsArrayType>
}

type PropsArrayType = {
    manufacturer: string,
    model: string
}

export const NewComponent3 = (props: PropsType) => {
    return (
        <div>
        <table>
            <tbody>
            {props.cars.map( (el, index) => {
                return (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </div>
    );
};