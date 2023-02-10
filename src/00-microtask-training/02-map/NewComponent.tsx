import React from 'react';

type StudentsPropsType = {
    students: Array<StudentsArrayPropsType>
}

type StudentsArrayPropsType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: StudentsPropsType) => {
    return (
        <div>
            <ul>
                {props.students.map( (el) => {
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
    );
};