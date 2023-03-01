import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../utils/context";

function MainNavigation() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  console.log(location);

  const logoutHandler = () => {
    userContext.onLogout();
    navigate("/login");
    return;
  };

  return (
    <Navbar className={classes.navbar} expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          IPL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {userContext.isAuthenticated && (
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? `${classes["isLinkActive"]} ${classes["link"]}`
                    : `${classes["link"]}`
                }
              >
                Make a prediction
              </NavLink>
            )}

            <NavLink
              to="/leaderboard"
              className={(navData) =>
                navData.isActive
                  ? `${classes["isLinkActive"]} ${classes["link"]}`
                  : `${classes["link"]}`
              }
            >
              Leaderboard
            </NavLink>
          </Nav>

          {userContext.isAuthenticated && (
            <NavLink
              onClick={logoutHandler}
              to="/login"
              className={`${classes["link"]} ${classes["logout-btn"]}`}
            >
              Logout
            </NavLink>
          )}

          {!userContext.isAuthenticated && (
            <div>
              {currentPath == "/login" ? (
                <NavLink
                  to="/signup"
                  className={(navData) =>
                    navData.isActive
                      ? `${classes["isLinkActive"]} ${classes["link"]}`
                      : `${classes["link"]}`
                  }
                >
                  Signup
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className={(navData) =>
                    navData.isActive
                      ? `${classes["isLinkActive"]} ${classes["link"]}`
                      : `${classes["link"]}`
                  }
                >
                  Login
                </NavLink>
              )}
            </div>
          )}
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
{/* <Navbar.Brand href="/" style={{color:"white"}}>Byju's Premier League</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className={(navData) => navData.isActive ? `${classes["isLinkActive"]} ${classes["link"]}`: `${classes["link"]}`}>Make a prediction</NavLink>
          <NavLink to="/leaderboard" className={(navData) => navData.isActive ? `${classes["isLinkActive"]} ${classes["link"]}`: `${classes["link"]}`}>Leaderboard</NavLink>
          <NavLink to="/predictionHistory" className={(navData) => navData.isActive ? `${classes["isLinkActive"]} ${classes["link"]}`: `${classes["link"]}`}>Prediction History</NavLink>

        </Nav> */}

export default MainNavigation;
