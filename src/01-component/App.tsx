import React from 'react';
import './App.css';
import { Body } from "./Body";
import {Header} from "./Header";
import {Footer} from "./Footer";

function App() {
  return (
    <>
        <Header title={'New Header'}/>
        <Body titleForBody={'New Body'}/>
        <Footer titleForFooter={'New Footer'}/>
    </>
  );
}

export default App;
