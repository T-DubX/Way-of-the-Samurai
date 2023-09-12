import React from 'react';
import './App.css';
import Technologies from "./Technologies";
import Header from "./Header";
import Footer from "./Footer";

function App(): JSX.Element {
    return (
        <div className="App">
            <Header/>
            Hello, samurai! Let's go!
            <Technologies/>
            <Footer/>
        </div>
    );
}


export default App;
