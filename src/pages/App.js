import React from 'react';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Lectures from './Lectures';
import Form from './Form';
import Chat from './Chat';
import Statistics from './Statistics';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const Context = React.createContext();

export default function App() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <Context.Provider value={[isCollapsed, setIsCollapsed]}>
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
    </Context.Provider>
  );
}