import './App.css';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Service from "./components/Service";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skill' element={<Skill></Skill>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
