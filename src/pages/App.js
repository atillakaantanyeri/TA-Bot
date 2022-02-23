import React, { useEffect } from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Lectures from "./Lectures";
import Form from "./Form";
import Chat from "./Chat";
import Profile from "./Profile";
import Statistics from "./Statistics";
import { Context } from "./Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const dummyTxt =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry...";
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [myLectures, setMyLectures] = React.useState([]);
  const [selectedLecture, setSelectedLecture] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(() => {
    if (sessionStorage.getItem("session")) {
      axios
        .get(
          "http://localhost:4000/api/users/" +
            sessionStorage.getItem("session") +
            ""
        )
        .then((res) => {
          setCurrentUser(res.data);
          console.log(res.data);
        });
    }
  }, []);

  return (
    <Context.Provider
      value={{
        value1: [isCollapsed, setIsCollapsed],
        value2: [myLectures, setMyLectures],
        value3: [selectedLecture, setSelectedLecture],
        value4: [currentUser, setCurrentUser],
      }}
    >
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/lectures" element={<Lectures />} />
            <Route path="/form" element={<Form />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}
