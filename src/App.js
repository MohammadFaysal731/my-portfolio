import './App.css';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/Service";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="" style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
