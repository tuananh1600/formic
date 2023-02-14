import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default App;
