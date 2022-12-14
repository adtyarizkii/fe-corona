import React, { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Patient from "../../assets/dropdown/patient.png";
import Profile from "../../assets/dropdown/profile.png";
import Consult from "../../assets/dropdown/consult.png";
import LogoutIcon from "../../assets/dropdown/logout.png";
import { UserContext } from "../../context/userContext";

export default function NavbarPatient() {
  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="white" expand="lg" fixed="top" style={{ height: "10vh" }}>
        <Container>
          <Navbar.Brand as={Link} to="/patient">
            <img src={Logo} alt="Halo corona" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavDropdown
                title={
                  <img
                    className="rounded-circle"
                    src={Patient}
                    alt="Patient"
                    style={{ width: "35px" }}
                  />
                }
                id="nav-dropdown"
              >
                <NavDropdown.Item
                  bg="dark"
                  variant="dark"
                  as={Link}
                  to="/patient/profile"
                >
                  <img
                    src={Profile}
                    alt="icon"
                    style={{ width: "25px", marginRight: "5px" }}
                  />
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/patient/inbox">
                  <img
                    src={Consult}
                    alt="icon"
                    style={{ width: "25px", marginRight: "5px" }}
                  />
                  Consultation
                </NavDropdown.Item>
                <NavDropdown.Divider
                  style={{ backgroundColor: "grey", color: "white" }}
                />
                <NavDropdown.Item onClick={logout}>
                  <img
                    src={LogoutIcon}
                    alt="icon"
                    style={{ width: "25px", marginRight: "5px" }}
                  />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
