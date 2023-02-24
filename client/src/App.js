import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import LeaderBoard from './pages/LeaderBoard';
import MakePrediction from './pages/MakePrediction';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  

function App() {
  return (
    <Router>  
      <div> 
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/leader_board" component={LeaderBoard} />
        <Route path="/make_prediction" component={MakePrediction} />
      </div>  
    </Router> 
  );
}

export default App;
