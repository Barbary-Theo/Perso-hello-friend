import React from 'react';
import ReactDOM from 'react-dom/client';

import './style_sheets/index.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/main";
import Portail from "./components/portail";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Main />}/>
            <Route path="/mars" exact element={<Portail />}/>
        </Routes>
    </BrowserRouter>
);
