import React from 'react';
import './App.css';

function App() {

    /*    const myFirstSubsctiber = (event: React.MouseEvent<HTMLButtonElement>) => {
            console.log('Hello I am Sergey!')
        }
        const mySecondSubsctiber = (event: React.MouseEvent<HTMLButtonElement>) => {
            console.log('Hello I am Ivan!')
        }*/

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const foo1 = () => {
        console.log(100501)
    }

    const foo2 = (howMany: number) => {
        console.log(howMany)
    }

    return (
        <div className="App">
            {/*            <button onClick={(event) => {console.log('Hello!')}}>MyYouTubeChanel-1</button>
            <button onClick={myFirstSubsctiber}>MyYouTubeChanel-1</button>
            <button onClick={mySecondSubsctiber}>MyYouTubeChanel-2</button>*/}
            <button onClick={() => onClickHandler('Sergey')}>MyYouTubeChanel-2</button>
            <button onClick={() => onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
            <div>
                <button onClick={foo1}>One</button>
                <button onClick={() => foo2(100502)}>Two</button>
            </div>
        </div>
    );
}

export default App;
