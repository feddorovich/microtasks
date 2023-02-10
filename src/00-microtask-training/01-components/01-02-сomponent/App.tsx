import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header"
import {Body} from "./Body";
import {Footer} from "./Footer";


function App():JSX.Element {
    return (
        <div>
            <Header title={'Header'}/>
            <Body title={'Body'}/>
            <Footer title={'Footer'}/>
        </div>
    );
}

export default App;
