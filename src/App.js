
import './App.css';
import Home from './Home/home';
import Navbar from './Navbar/navbar';
import Card from './cards/cards';
import Register from './Register/Register';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Card/>
      <Register/>
      
   
    </div>
  );
}

export default App;