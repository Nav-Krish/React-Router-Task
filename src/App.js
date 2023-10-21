import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import All from './Components/All';
import FullStackDevelopment from './Components/FullStackDevelopment';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/full-stack-development' element={<FullStackDevelopment />} />
        <Route path='/data-science' element={<DataScience />} />
        <Route path='/cyber-security' element={<CyberSecurity />} />
        <Route path='/career' element={<Career />} />
      </Routes>

      <Footer />
    </BrowserRouter >
  );
}

export default App;