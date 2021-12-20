import React from 'react';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Lectures from './Lectures';
import Form from './Form';
import Chat from './Chat';
import Statistics from './Statistics';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  // const [status, setStatus] = React.useState(false);

  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/lectures' element={<Lectures/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/statistics' element={<Statistics/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}