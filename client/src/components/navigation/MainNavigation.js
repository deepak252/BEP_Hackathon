import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import classes from "./MainNavigation.module.scss"

function MainNavigation() {
  return (
    <Navbar className={classes.navbar} expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{color:"white"}}>IPL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto">
          <NavLink to="/" className={(navData) => navData.isActive ? `${classes["isLinkActive"]} ${classes["link"]}`: `${classes["link"]}`}>Make a prediction</NavLink>
          <NavLink to="/leaderboard" className={(navData) => navData.isActive ? `${classes["isLinkActive"]} ${classes["link"]}`: `${classes["link"]}`}>Leaderboard</NavLink>
          </Nav>
          <NavLink   to="/login" className={`${classes["link"]} ${classes["logout-btn"]}`}>Logout</NavLink>
        </Navbar.Collapse>
        <NavLink to="/predictionHistory" className={(navData) => navData.isActive ? `${classes["isLinkActive"]} ${classes["link"]}`: `${classes["link"]}`}>Prediction History</NavLink>

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