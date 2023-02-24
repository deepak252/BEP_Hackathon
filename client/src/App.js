import 'bootstrap/dist/css/bootstrap.css';
import Layout from './components/navigation/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import LeaderBoard from './pages/LeaderBoard';
import MakePrediction from './pages/MakePrediction';
import { Route, Link, Routes } from 'react-router-dom'  


function App() {
  return (
    <Layout>
      <Routes>  
          <Route path="/" element={<MakePrediction/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/leaderboard" element={<LeaderBoard/>} />
      </Routes> 
    </Layout>
  );
}

export default App;
