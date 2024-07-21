import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Signup from './Pages/Signup';
// import ProtectedWrapper from "./Components/Protectedwrapper";

function App() {
  return (
    <div className="App">
      
      <div style={{padding:'20px'}}>
        <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route  path='/login' element={<Login />}/>
          <Route  path='/signup' element={<Signup />}/>
          {/* <Route element={<ProtectedWrapper />}> */}
          <Route path='/dashboard' element={<Dashboard />} />
          {/* </Route> */}
        </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
