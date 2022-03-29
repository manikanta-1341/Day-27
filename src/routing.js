import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar  from './navbar';
export default function Routing(){
    <BrowserRouter>
        <Routes>
            <Route path="/navbar" element={Navbar}></Route>
        </Routes>
    </BrowserRouter>
}