import React from 'react';

type CarsPropsType = {
    cars: Array<CarsArrayPropType>
}

type CarsArrayPropType = {
    manufacturer: string,
    model: string
}

export const NewComponent2 = (props: CarsPropsType) => {
    return (
        <div>
            <table>
                <tbody>
                {props.cars.map( (el,index) => {
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