import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRouter from './Routes/MainRouter';
import Footer from "../src/Components/Footer"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainRouter/>
     <Footer/>
    </div>
  );
}

export default App;
