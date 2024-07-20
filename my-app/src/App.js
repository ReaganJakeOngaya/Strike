// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{padding:'20px'}}>
        <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route  path='/login' element={<Login />}/>
          <Route  path='/signup' element={<Signup />}/>
        </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
