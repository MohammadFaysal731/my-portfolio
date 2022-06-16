import './App.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <ToastContainer />
    </div>
  );
}

export default App;
