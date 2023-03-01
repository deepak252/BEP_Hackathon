import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import classes from "./MainNavigation.module.scss"
import { useNavigate } from 'react-router-dom';


function MainNavigation() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
    return;
  }


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
          <NavLink onClick={logoutHandler}   to="/login" className={`${classes["link"]} ${classes["logout-btn"]}`}>Logout</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;