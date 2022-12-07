import './App.css';
import Main from "./views/Main"
import Detail from "./components/Detail"
import {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/products" default/>
          <Route element={<Detail />} path="/products/:id" />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
