import React from "react";
import { Route, Routes } from "react-router-dom";
import AddQuestion from "./Components/AddQuestion";
import { AuthProvider } from "./Components/Auth";
import Error from "./Components/Error";
import Exam from "./Components/Exam";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ReqAuth from "./Components/ReqAuth";

function App() {
  return (
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add-question" element={<ReqAuth><AddQuestion/></ReqAuth>} />
      <Route path="/exam-home" element={<ReqAuth><Exam/></ReqAuth>} />
      <Route path="/*" element={<Error/>}/>
    </Routes>
    </AuthProvider>
  )
}

export default App;
