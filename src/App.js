import React, { Component } from 'react';
import Contador from './Contador';
import Membro from './components/Membro';
import Login from './components/login';
import Feed from './components/feed';

function App() {
    return (
        <div>
            <Login />
            <hr/>

            <h1>Contador</h1>
            <Contador />

            <hr/>
            <h1>Membros</h1>
            <Membro nome="Tadeu"/>

            <hr/>
            <h1>Feed</h1>
            <Feed/>
        </div>
    );
}

export default App;