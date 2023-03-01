import "bootstrap/dist/css/bootstrap.css";
import Layout from "./components/navigation/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LeaderBoard from "./pages/LeaderBoard";
import MakePrediction from "./pages/MakePrediction";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import UserContext from "./utils/context";
import { useContext } from "react";
import Error from "./pages/Error";
<<<<<<< HEAD
=======
import PredictionHistory from "./pages/PredictionHistory";
>>>>>>> d83bbe86822bea42f37e9c25a39b2f69d5dc15ce

function App() {
  const userContext = useContext(UserContext);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            userContext.isAuthenticated ? (
              <MakePrediction />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
<<<<<<< HEAD
=======

        <Route
          path="/myPredictionHistory"
          element={
            userContext.isAuthenticated ? (
              <PredictionHistory />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />

>>>>>>> d83bbe86822bea42f37e9c25a39b2f69d5dc15ce
        <Route
          path="/login"
          element={
            userContext.isAuthenticated ? (
              <Navigate replace to="/" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/signup"
          element={
            userContext.isAuthenticated ? (
              <Navigate replace to="/" />
            ) : (
              <Register />
            )
          }
        />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
