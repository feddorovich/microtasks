import React from "react";

type NewComponentType = {
    students: Array<StudentType>
    //students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.students.map((el) => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span> {el.name}</span>
                            <span> {el.age}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

type CarsType = {
    cars: Array<CarsArrayType>
}

type CarsArrayType = {
    manufacturer: string,
    model: string
}

export const Cars = (props: CarsType) => {

    return (
        <div>
            <table>
                <tbody>
                {props.cars.map((el, index) => {
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
    )
}