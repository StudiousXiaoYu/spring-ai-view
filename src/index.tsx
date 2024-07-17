import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ChatHome from '../components/chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode> 
    <Router>
        <Routes>
            <Route path='/talk' element={<ChatHome />}></Route>
            <Route path='/' element={<App />}></Route>
        </Routes>
    </Router>
  </React.StrictMode>,
);
