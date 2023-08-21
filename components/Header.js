import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navScroll = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    menuRef.current.className = "not-active";
  };

  const toggle = () => {
    if (!menuOpen) {
      menuRef.current.className = "active";
    } else {
      menuRef.current.className = "not-active";
    }
    setMenuOpen(!menuOpen);
  };
  return (
    <Wrapper>
      <nav>
        <Container className="nav-container">
          <div className="menu-box">
            <h1 className="logo">
              smart<span>Dev</span>
            </h1>
            <Hamburger menuRef={menuRef} toggler={toggle} />
          </div>
          <div className={`${menuOpen ? "nav-list-box open" : "nav-list-box"}`}>
            <ul className="nav-list">
              <li className="nav-list-item">
                <span
                  className="nav-link"
                  onClick={() => navScroll("projects")}
                >
                  works
                </span>
              </li>
              <li className="nav-list-item">
                <span className="nav-link" onClick={() => navScroll("contact")}>
                  contact
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding-top: 1rem;
  a,
  .logo {
    font-family: Lato, Trebuchet MS, sans-serif;
  }
  a,
  .nav-link {
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
  }
  .nav-link:active,
  .nav-link:focus {
    color: #fff;
  }
`;

export default Header;
