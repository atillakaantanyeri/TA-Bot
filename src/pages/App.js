import React from 'react';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Lectures from './Lectures';
import Form from './Form';
import Chat from './Chat';
import Statistics from './Statistics';
import {Context} from './Context';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


export default function App() {

  const dummyTxt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...';
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [myLectures, setMyLectures] = React.useState([
    {
      code: 'BIL343',
      name: 'Object Oriented Programming',
      description: dummyTxt,
    },
    {
      code: 'BIL344',
      name: 'Database Management Systems',
      description: dummyTxt,
    },
    {
      code: 'BILXXX',
      name: 'Lorem Impsum Text',
      description: dummyTxt,
    },
    {
      code: 'BILXXX',
      name: 'Lorem Impsum Text',
      description: dummyTxt,
    },
  ]);
  const [selectedLecture, setSelectedLecture] = React.useState({});

  return (
    <Context.Provider value={{value1: [isCollapsed, setIsCollapsed], value2: [myLectures, setMyLectures], value3: [selectedLecture, setSelectedLecture]}}>
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