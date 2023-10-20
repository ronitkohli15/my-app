
import './App.css';
import Home from './Home/home';
import Navbar from './Navbar/navbar';
import Card from './cards/cards';
import Register from './Register/Register';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter className="App">
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        
       
      </Routes>
      
    
      
      
      
      
   
    </div>
    </BrowserRouter>
  );
}

export default App;