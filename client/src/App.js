import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import LeaderBoard from './pages/LeaderBoard';
import MakePrediction from './pages/MakePrediction';
import { Route, Link, Routes } from 'react-router-dom'  
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>  
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/leader_board" element={<LeaderBoard/>} />
        <Route path="/make_prediction" element={<MakePrediction/>} />
    </Routes> 
  );
}

export default App;
