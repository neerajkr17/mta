import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Opening from "./components/Page/Opening";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Page/Update";
import Verify from "./components/Page/Verify";
import Modify from "./components/Page/Modify";
// import Login from "./components/Login";

function App() {

  return (
    <>
     <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="Main">
            <Sidebar />
            <Routes>
              {/* <Route path="/" element={<Login />} /> */}
              <Route path="/merchant-opening" element={<Opening />} />
              <Route path="/merchant-update" element={<Update />} />
              <Route path="/merchant-verify" element={<Verify />} />
              <Route path="/merchant-modify" element={<Modify/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
