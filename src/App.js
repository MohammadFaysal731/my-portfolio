import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectDetails from './components/ProjectDetails';
import Projects from './components/Projects';
import Service from "./components/Service";
import Skills from "./components/Skills";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div
      className=""
      style={{ backgroundColor: "#0A0826", color: "rgba(255, 255, 255, 0.6)" }}
    >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route
          path="/project/:id"
          element={<ProjectDetails/>}
        ></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
