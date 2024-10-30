//App.js

import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TelaDeLogin from './components/TelaDeLogin/index.js';
import HomePage from './components/HomePage/index.js'

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
`;
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main><TelaDeLogin/></Main>}/>
                <Route path='/inicio' element={<Main><HomePage/></Main>}/>
            </Routes>
        </Router>
    );
};